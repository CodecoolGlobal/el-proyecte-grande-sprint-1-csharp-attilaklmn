using webapi.Model;

namespace webapi.Repo
{
    public interface ITicketRepository<T>
    {
        HashSet<T> GetAll();
        bool ReserveIfPossible(Ticket reservation);

        bool IsSeatReserved(ReservedChecker reservedChecker);

        IEnumerable<Guid> GetReservedSeatsByScreeningId(Guid id);


    }
}
