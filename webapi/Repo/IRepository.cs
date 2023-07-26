namespace webapi.Repo;

public interface IRepository<T>
{
    List<T> Items { get; }
}