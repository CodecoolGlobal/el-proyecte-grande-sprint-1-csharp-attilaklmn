using webapi.Model.Entity;

namespace webapi.Service
{
    public interface IScreeningService
    {
        Task<IEnumerable<Screening>> GetAll();
    }
}
