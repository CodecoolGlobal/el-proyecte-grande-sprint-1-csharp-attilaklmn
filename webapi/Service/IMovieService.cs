namespace webapi.Service;

public interface IMovieService<T>
{
    HashSet<T> GetAll();
}