using webapi.Model.Entity;

namespace webapi.Repo
{
    public class ScreeningRepository : IScreeningRepository<Screening>
    {

        private HashSet<Screening> _screenings;
        private IMovieRepository<Movie> _movieRepository;
        private IRoomRepository<Room> _roomRepository;
        
       


        public ScreeningRepository(IMovieRepository<Movie> movieRepository, IRoomRepository<Room> roomRepository)
        {

            _movieRepository = movieRepository;
            _roomRepository = roomRepository;
            _screenings = SeedScreenings();
        }

        private HashSet<Screening> SeedScreenings()
        {
            return new HashSet<Screening>()
            {
                new Screening(_roomRepository.GetAll().First().Id, _movieRepository.GetAll().First().Id, DateTime.Parse("2023-08-01"))
            };
        }

        public HashSet<Screening> GetAll()
        {
            return _screenings;
        }
    }
}
