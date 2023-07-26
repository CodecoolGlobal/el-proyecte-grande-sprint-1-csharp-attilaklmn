namespace webapi;

public interface IMovieService<T>
{
    HashSet<T> GetAll();
}