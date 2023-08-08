using webapi.Model;
using webapi.Model.Entity;
using webapi.Repo;

namespace webapi.Service
{
    public class TicketService : ITicketService<Ticket>
    {
        private ITicketRepository<Ticket> _reservationRepository;

        public TicketService(ITicketRepository<Ticket> reservationRepository)
        {
            _reservationRepository = reservationRepository;
        }

        public HashSet<Ticket> GetAll()
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

        public bool ReserveIfPossible(Ticket temporaryReservation)
        {
            return _reservationRepository.ReserveIfPossible(temporaryReservation);
        }
    }
}
