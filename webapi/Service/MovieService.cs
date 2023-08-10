using Microsoft.EntityFrameworkCore;
using webapi.Data;
using webapi.Model.DTOs;
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
    
    public Movie AddMovie(MovieModelDto movieModelDto)
    {
        var movieEntity = new Movie
        {
            Title = movieModelDto.Title,
            Cast = movieModelDto.Cast,
            Summary = movieModelDto.Summary
        };
        
        _context.Movies.Add(movieEntity);
        _context.SaveChanges();

        return movieEntity;
    }
}