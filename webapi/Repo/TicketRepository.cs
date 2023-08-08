using webapi.Model;
using webapi.Model.Entity;

namespace webapi.Repo
{
    public class TicketRepository : ITicketRepository<Ticket>
    {
        public HashSet<Ticket> _reservations;

        public TicketRepository()
        {
            _reservations = new();
        }

        public HashSet<Ticket> GetAll()
        {
            return _reservations;
        }

        public IEnumerable<Guid> GetReservedSeatsByScreeningId(Guid id)
        {
            return _reservations.Where(e => e.ScreeningId == id).Select(e => e.SeatId);
        }

        public bool IsSeatReserved(ReservedChecker reservedChecker)
        {
            foreach (Ticket reservation in _reservations)
            {
                if (reservation.ScreeningId == reservedChecker.ScreeningId && reservation.SeatId == reservedChecker.SeatId)
                {
                    return true;
                }
            }
            return false;
        }

        public bool ReserveIfPossible(Ticket reservation)
        {
            bool isReserved = IsSeatReserved(reservation);
            if (!isReserved)
            {
                Reserve(reservation);
            }
            return !isReserved;
        }

        private bool IsSeatReserved(Ticket checkable)
        {
            foreach (Ticket reservation in _reservations)
            {
                if (reservation.ScreeningId == checkable.ScreeningId && reservation.SeatId == checkable.SeatId)
                {
                    return true;
                }
            }
            return false;
        }

        private void Reserve(Ticket reservation)
        {
            _reservations.Add(reservation);
        }
    }
}
