using webapi.Model.DTOs;
using webapi.Model.Entity;

namespace webapi.Service
{
    public interface IScreeningService
    {
        Task<IEnumerable<Screening>> GetAll();

        Screening AddScreening(ScreeningModelDto screeningModelDto);

        bool DeleteScreening(List<long> outdatedScreeningIds);
    }
}
