using Microsoft.EntityFrameworkCore;
using webapi.Data;
using webapi.Model.Entity;

namespace webapi.Service
{
    public class ScreeningService : IScreeningService
    {
        private readonly CinemaSharpContext _context;

        public ScreeningService(CinemaSharpContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Screening>> GetAll()
        {
            var screenings = await _context.Screenings.ToListAsync();
            return screenings;
        }
    }
}
