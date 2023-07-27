using webapi.Model;
using webapi.Repo;

namespace webapi.Service
{
    public class RoomService : IRoomService<Room>
    {
        private IRoomRepository<Room> _roomRepository;

        public RoomService(IRoomRepository<Room> roomRepository)
        {
            _roomRepository = roomRepository;
        }

        public Room GetById(Guid id)
        {
            return _roomRepository.GetById(id);
        }
    }
}
