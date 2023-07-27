namespace webapi.Repo
{
    public interface IRoomRepository<T>
    {
        HashSet<T> GetAll();
        T? GetById(Guid id);
    }
}
