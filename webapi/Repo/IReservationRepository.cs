using webapi.Model;

namespace webapi.Repo
{
    public interface IReservationRepository<T>
    {
        HashSet<T> GetAll();
        bool ReserveIfPossible(Reservation reservation);

        bool IsSeatReserved(ReservedChecker reservedChecker);

        IEnumerable<Guid> GetReservedSeatsByScreeningId(Guid id);


    }
}
