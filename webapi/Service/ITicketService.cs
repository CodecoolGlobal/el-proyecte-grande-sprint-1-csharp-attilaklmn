using webapi.Model;
using webapi.Model.Entity;

namespace webapi.Service
{
    public interface ITicketService
    {
        Task<IEnumerable<Ticket>> GetAll();
        Task<bool> ReserveTicket(ReserveTicketRequest request);
    }
}
