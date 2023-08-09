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

        public async Task<bool> ReserveTicket(ReserveTicketRequest request)
        {
            using var transaction = _context.Database.BeginTransaction();

            try
            {
                bool ticketExists = await _context.Tickets
                    .AnyAsync(t => t.Screening.Id == request.ScreeningId && t.Seat.Id == request.SeatId);

                if (!ticketExists)
                {
                    var newTicket = new Ticket
                    {
                        Screening = await _context.Screenings.FindAsync(request.ScreeningId),
                        Seat = await _context.Seats.FindAsync(request.SeatId),
                        User = await _context.Users.FindAsync(request.UserId),
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
