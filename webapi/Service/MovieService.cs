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

    public async Task<IEnumerable<Movie>> GetMovieById(long movieId)
    {
        List<Movie> movies = await _context.Movies.ToListAsync();
        List<Movie> movie = new List<Movie>();
        movie.Add(movies.FirstOrDefault(x => x.IsThisThatMovie(movieId)));
        return movie;
    }
    
    public bool DeleteMovie(long movieId)
    {
        var movieToDelete = _context.Movies.SingleOrDefault(movie => movie.Id == movieId);
        
        if (movieToDelete == null)
        {
            return false;
        }
        
        var screeningsToDelete = _context.Screenings.Where(screening => screening.MovieId == movieId).ToList();

        if (screeningsToDelete.Count > 0)
        {
            _context.Screenings.RemoveRange(screeningsToDelete);
        }

        _context.Movies.Remove(movieToDelete);
        _context.SaveChanges();

        return true;
    }
}