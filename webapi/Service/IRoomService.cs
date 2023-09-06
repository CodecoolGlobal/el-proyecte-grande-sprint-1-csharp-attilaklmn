using webapi.Model.Entity;

namespace webapi.Service
{
    public interface IRoomService
    {
        Task<IEnumerable<Room>> GetAll();
        Task<Room> GetById(long id);
        Task<IEnumerable<Seat>> GetSeatsById(long id);
    }
}
