namespace webapi.Service
{
    public interface IScreeningService<T>
    {
        HashSet<T> GetAll();
    }
}
