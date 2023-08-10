using Microsoft.EntityFrameworkCore;
using webapi.Data;
using webapi.Model;
using webapi.Model.Entity;

namespace webapi.Service
{
    public class TicketService : ITicketService
    {
        private readonly CinemaSharpContext _context;

        public TicketService(CinemaSharpContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Ticket>> GetAll()
        {
            var tickets = await _context.Tickets.ToListAsync();
            return tickets;
        }

        public async Task<IEnumerable<long>> GetReservedSeatIdsByScreeningId(long Id)
        {
            var seatIds = await _context.Tickets.Where(t => t.Screening.Id == Id).Select(e => e.Seat.Id).ToListAsync();
            return seatIds;
        }

        public async Task<bool> ReserveTicket(ReserveTicketRequest request)
        {
            using var transaction = _context.Database.BeginTransaction();

            try
            {
                bool ticketExists = await _context.Tickets
                    .AnyAsync(t => t.Screening.Id == request.ScreeningId && t.Seat.Id == request.SeatId);

                if (!ticketExists)
                {
                    var screening = await _context.Screenings.FindAsync(request.ScreeningId);
                    var seat = await _context.Seats.FindAsync(request.SeatId);
                    var user = await _context.Users.FirstOrDefaultAsync(u => u.Username == request.Username);
                    if (screening == null || seat == null || user == null)
                    {
                        throw new InvalidOperationException("One or more entities not found.");
                    }
                    var newTicket = new Ticket
                    {
                        Screening = screening,
                        Seat = seat,
                        User = user,
                        Finalized = false
                    };
                                        
                    _context.Tickets.Add(newTicket);

                    await _context.SaveChangesAsync();
                }

                transaction.Commit();

                return true;
            }
            catch (Exception ex)
            {                
                transaction.Rollback();
                return false;
            }
        }
    }
}
