using webapi.Data;

namespace webapi.Service
{
    public class RoomService : IRoomService
    {
        private readonly CinemaSharpContext _context;

        public RoomService(CinemaSharpContext context)
        {
            _context = context;
        }
    }
}
