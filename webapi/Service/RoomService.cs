using Microsoft.EntityFrameworkCore;
using webapi.Data;
using webapi.Model.Entity;

namespace webapi.Service
{
    public class RoomService : IRoomService
    {
        private readonly CinemaSharpContext _context;

        public RoomService(CinemaSharpContext context)
        {
            _context = context;
        }

        public async Task<Room> GetById(long id)
        {
            var room = await _context.Rooms.FindAsync(id);
            return room;
        }

        public async Task<IEnumerable<Seat>> GetSeatsById(long id)
        {
            var seats = await _context.Seats.Where(x => x.Room.Id == id).ToListAsync();
            return seats;
        }
    }
}
