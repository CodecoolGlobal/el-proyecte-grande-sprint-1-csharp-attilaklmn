using webapi.Model;

namespace webapi.Service
{
    public interface ITicketService<T>
    {
        HashSet<T> GetAll();
        bool ReserveIfPossible(Ticket reservation);

        bool IsSeatReserved(ReservedChecker reservedChecker);

        IEnumerable<Guid> GetReservedSeatsByScreeningId(Guid id);
    }
}
