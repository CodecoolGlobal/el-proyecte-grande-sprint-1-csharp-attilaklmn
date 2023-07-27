namespace webapi.Repo;

public interface IMovieRepository<T>
{
    HashSet<T> GetAll();
    T? GetById(Guid id);
}