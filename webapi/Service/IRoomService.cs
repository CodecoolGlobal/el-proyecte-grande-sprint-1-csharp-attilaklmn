using webapi.Model;

namespace webapi.Service
{
    public interface IRoomService<T>
    {
        T GetById(Guid id);
        Dictionary<int, HashSet<Seat>> GetSeats(Guid id);
    }
}
