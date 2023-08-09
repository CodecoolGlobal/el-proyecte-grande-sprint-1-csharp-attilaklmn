using Microsoft.EntityFrameworkCore;
using webapi.Data;
using webapi.Model.Entity;


namespace webapi.Service;

public class MovieService : IMovieService
{
    private readonly CinemaSharpContext _context;

    public MovieService(CinemaSharpContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Movie>> GetAll()
    {
        var movies = await _context.Movies.ToListAsync();
        return movies;
    }
}