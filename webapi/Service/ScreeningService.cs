using System.Globalization;
using Microsoft.EntityFrameworkCore;
using webapi.Data;
using webapi.Model.DTOs;
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
            return await _context.Screenings.ToListAsync();
        }

        public Screening AddScreening(ScreeningModelDto screeningModelDto)
        {
            var screeningEntity = new Screening
            {
                MovieId = screeningModelDto.MovieId,
                RoomId = screeningModelDto.RoomId,
                StartingDate = screeningModelDto.StartingDate
            };

            _context.Screenings.Add(screeningEntity);
            _context.SaveChanges();

            return screeningEntity;
        }

        public bool DeleteScreening(List<long> outdatedScreeningIds)
        {
            var screeningsToDelete = _context.Screenings.Where(screening => outdatedScreeningIds.Contains(screening.Id))
                .ToList();
            
            if (screeningsToDelete.Count == 0)
            {
                return false;
            }
            
            _context.Screenings.RemoveRange(screeningsToDelete);
            _context.SaveChanges();

            return true;
        }
    }
}
