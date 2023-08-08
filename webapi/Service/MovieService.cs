using webapi.Model.Entity;
using webapi.Repo;

namespace webapi.Service;

public class MovieService : IMovieService<Movie>
{
    private IMovieRepository<Movie> _movieRepository { get; }

    public MovieService(IMovieRepository<Movie> movieRepository)
    {
        _movieRepository = movieRepository;
    }

    public HashSet<Movie> GetAll()
    {
        return _movieRepository.GetAll();
    }

    public Movie? GetById(Guid id)
    {
        return _movieRepository.GetById(id);
    }
}