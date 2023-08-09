using webapi.Model.Entity;

namespace webapi.Service;

public interface IMovieService
{
    Task<IEnumerable<Movie>> GetAll();
}