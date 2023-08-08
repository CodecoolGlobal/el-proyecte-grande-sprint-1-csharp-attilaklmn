using webapi.Model.Entity;
using webapi.Repo;

namespace webapi.Service
{
    public class ScreeningService : IScreeningService<Screening>
    {
        private IScreeningRepository<Screening> _screeningRepository;

        public ScreeningService(IScreeningRepository<Screening> screeningRepository)
        {
            _screeningRepository = screeningRepository;
        }

        public HashSet<Screening> GetAll()
        {
            return _screeningRepository.GetAll();
        }
    }
}
