namespace webapi.Repo
{
    public interface IScreeningRepository<T>
    {
        HashSet<T> GetAll();
    }
}
