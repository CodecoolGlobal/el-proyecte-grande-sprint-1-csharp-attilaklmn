using webapi.Model;
using webapi.Model.Entity;

namespace webapi.Service
{
    public interface ITicketService
    {
        Task<IEnumerable<Ticket>> GetAll();
        Task<bool> ReserveTicket(ReserveTicketRequest request);
        Task<IEnumerable<Ticket>> GetTicketsByScreeningId(long Id);
        Task<IEnumerable<Ticket>> GetUnfinalizedTickets(long screeningId, long userId);
        Task<IEnumerable<Ticket>> FinalizeTickets(long screeningId, long userId);
    }
}
