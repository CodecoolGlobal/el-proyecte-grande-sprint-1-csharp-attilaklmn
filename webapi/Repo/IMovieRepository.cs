namespace webapi.Repo;

public interface IMovieRepository<T>
{
    HashSet<T> GetAll();
}