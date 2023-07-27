using webapi.Model;
using webapi.Repo;

namespace webapi.Service
{
    public class ReservationService : IReservationService<Reservation>
    {
        private IReservationRepository<Reservation> _reservationRepository;

        public ReservationService(IReservationRepository<Reservation> reservationRepository)
        {
            _reservationRepository = reservationRepository;
        }

        public HashSet<Reservation> GetAll()
        {
            return _reservationRepository.GetAll();
        }

        public bool ReserveIfPossible(Reservation temporaryReservation)
        {
            return _reservationRepository.ReserveIfPossible(temporaryReservation);
        }
    }
}
