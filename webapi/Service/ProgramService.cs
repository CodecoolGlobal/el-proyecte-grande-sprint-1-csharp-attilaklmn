using webapi.Model;
using webapi.Repo;

namespace webapi.Service;

public class ProgramService : IProgramService
{
    private IRepository<Programme> _repository;

    public ProgramService(IRepository<Programme> repository)
    {
        _repository = repository;
    }

    public List<Programme> GetPrograms()
    {
        return _repository.Items;
    }
}