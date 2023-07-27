using webapi.Model;

namespace webapi.Repo
{
    public class RoomRepository : IRoomRepository<Room>
    {
        private HashSet<Room> _roomRepository;

        public RoomRepository()
        {
            _roomRepository = SeedRooms();
        }

        private HashSet<Room> SeedRooms()
        {
            return new HashSet<Room>()
            {
                new Room("room1", 5, 5),
                new Room("room2", 7, 7)
            };
        }

        public HashSet<Room> GetAll()
        {
            return _roomRepository;
        }
        public Room? GetById(Guid id)
        {
            return _roomRepository.FirstOrDefault(e => e.Id == id);
        }
    }
}
