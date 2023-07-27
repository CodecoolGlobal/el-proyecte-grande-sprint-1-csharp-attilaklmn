using webapi.Model;

namespace webapi.Repo
{
    public class ScreeningRepository : IScreeningRepository<Screening>
    {

        private HashSet<Screening> _screenings;
        private IMovieRepository<Movie> _movieRepository;
        
        private HashSet<Room> rooms = new()
            {
                new Room("room1", 5, 5),
                new Room("room2", 7, 7)
            };


        public ScreeningRepository(IMovieRepository<Movie> movieRepository)
        {

            _movieRepository = movieRepository;
            _screenings = SeedScreenings();
        }

        private HashSet<Screening> SeedScreenings()
        {
            return new HashSet<Screening>()
            {
                new Screening(rooms.First().Id, _movieRepository.GetAll().First().Id, DateTime.Parse("2023-08-01"))
            };
        }

        public HashSet<Screening> GetAll()
        {
            return _screenings;
        }
    }
}
