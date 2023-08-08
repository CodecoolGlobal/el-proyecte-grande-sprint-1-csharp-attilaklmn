using webapi.Model.Entity;

namespace webapi.Repo
{
    public interface IRoomRepository<T>
    {
        HashSet<T> GetAll();
        T? GetById(Guid id);
        Dictionary<int, HashSet<Seat>> GetSeats(Guid id);
    }
}
