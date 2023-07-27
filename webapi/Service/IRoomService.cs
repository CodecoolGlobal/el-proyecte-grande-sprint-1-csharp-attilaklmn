namespace webapi.Service
{
    public interface IRoomService<T>
    {
        T GetById(Guid id);
    }
}
