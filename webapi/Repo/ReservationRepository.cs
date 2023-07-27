using webapi.Model;

namespace webapi.Repo
{
    public class ReservationRepository : IReservationRepository<Reservation>
    {
        public HashSet<Reservation> _reservations;

        public ReservationRepository()
        {
            _reservations = new();
        }

        public HashSet<Reservation> GetAll()
        {
            return _reservations;
        }

        public bool ReserveIfPossible(Reservation reservation)
        {
            bool isReserved = IsSeatReserved(reservation);
            if (!isReserved)
            {
                Reserve(reservation);
            }
            return !isReserved;
        }

        private bool IsSeatReserved(Reservation checkable)
        {
            foreach (Reservation reservation in _reservations)
            {
                if (reservation.ScreeningId == checkable.ScreeningId && reservation.SeatId == checkable.SeatId)
                {
                    return true;
                }
            }
            return false;
        }

        private void Reserve(Reservation reservation)
        {
            _reservations.Add(reservation);
        }
    }
}
