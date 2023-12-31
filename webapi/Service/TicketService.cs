﻿using Microsoft.EntityFrameworkCore;
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

        public async Task<bool> FinalizeTickets(IEnumerable<long> ticketIds)
        {

            using var transaction = await _context.Database.BeginTransactionAsync();

            try
            {
                var ticketsToFinalize = await _context.Tickets
                    .Where(t => ticketIds.Contains(t.Id))
                    .ToListAsync();

                foreach (var ticket in ticketsToFinalize)
                {
                    ticket.Finalize();
                }

                await _context.SaveChangesAsync();
                await transaction.CommitAsync();
                return true;
            }
            catch (Exception)
            {
                await transaction.RollbackAsync();
                return false;
            }


        }

        public async Task<IEnumerable<Ticket>> GetAll()
        {
            var tickets = await _context.Tickets.ToListAsync();
            return tickets;
        }

        public async Task<IEnumerable<Ticket>> GetTicketsByScreeningId(long Id)
        {
            var tickets = await _context.Tickets.Where(t => t.Screening.Id == Id).ToListAsync();
            return tickets;
        }

        public async Task<IEnumerable<Ticket>> GetUnfinalizedTickets(long screeningId, long userId)
        {
            var tickets = await _context.Tickets.Where(t => t.Screening.Id == screeningId && t.UserId == userId && !t.Finalized).ToListAsync();
            return tickets;
        }

        public async Task<bool> ReserveTicket(ReserveTicketRequest request)
        {
            using var transaction = _context.Database.BeginTransaction();

            try
            {
                bool ticketExists = await _context.Tickets
                    .AnyAsync(t => t.Screening.Id == request.ScreeningId && t.Seat.Id == request.SeatId);

                if (ticketExists)
                {
                    throw new InvalidOperationException("Ticket already reserved");
                } else
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
