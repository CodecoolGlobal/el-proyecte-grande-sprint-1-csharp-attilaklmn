using webapi.Model.DTOs;
using webapi.Model.Entity;

namespace webapi.Service;

public interface IMovieService
{
    Task<IEnumerable<Movie>> GetAll();
    
    Movie AddMovie(MovieModelDto movieModelDto);

    Task<Movie> GetMovieById(long movieId);
}