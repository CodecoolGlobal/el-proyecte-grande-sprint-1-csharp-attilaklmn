namespace webapi;

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
}