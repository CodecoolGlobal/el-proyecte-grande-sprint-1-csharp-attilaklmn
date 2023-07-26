namespace webapi;

public interface IMovieRepository<T>
{
    HashSet<T> GetAll();
}