using Microsoft.EntityFrameworkCore;
using webapi.Data;
using webapi.Model;
using webapi.Model.Entity;
using webapi.Repo;

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
    }
}
