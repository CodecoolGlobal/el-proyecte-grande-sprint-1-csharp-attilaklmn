using webapi.Model.Entity;

namespace webapi.Repo;

public class MovieRepository : IMovieRepository<Movie>
{
    private HashSet<Movie> _movies;

    public MovieRepository()
    {
        SeedMovies();
    }

    private void SeedMovies()
    {
        _movies = new HashSet<Movie>()
        {
            new Movie("Barbie", new[] { "Margot Robbie", "Ryan Gosling" }, "Barbie suffers a crisis that leads her to question her world and her existence."),
            new Movie("Oppenheimer", new[] { "Cillian Murphy", "Emily Blunt" }, "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb."),
        };
    }

    public HashSet<Movie> GetAll()
    {
        return _movies;
    }

    public Movie? GetById(Guid id)
    {
        return _movies.FirstOrDefault(e => e.Id == id);
    }
}