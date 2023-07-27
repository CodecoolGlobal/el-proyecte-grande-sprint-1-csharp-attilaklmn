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

        public IEnumerable<Guid> GetReservedSeatsByScreeningId(Guid id)
        {
            return _reservationRepository.GetReservedSeatsByScreeningId(id);
        }

        public bool IsSeatReserved(ReservedChecker reservedChecker)
        {
            return _reservationRepository.IsSeatReserved(reservedChecker);
        }

        public bool ReserveIfPossible(Reservation temporaryReservation)
        {
            return _reservationRepository.ReserveIfPossible(temporaryReservation);
        }
    }
}
