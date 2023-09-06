using webapi.Model.DTOs;
using webapi.Model.Entity;

namespace webapi.Service;

public interface IMovieService
{
    Task<IEnumerable<Movie>> GetAll();
    
    Task<IEnumerable<Movie>> GetMovieById(long movieId);
    
    Movie AddMovie(MovieModelDto movieModelDto);
    
    bool DeleteMovie(long movieId);
}