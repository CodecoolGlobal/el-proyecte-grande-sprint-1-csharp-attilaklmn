using webapi.Model;

namespace webapi.Repo;

public class ProgramRepository :IRepository<Programme>
{
    public List<Programme> Items { get; }

    public ProgramRepository()
    {
        Items = _programmes;
    }

    private List<Programme> _programmes = new()
    {
        new Programme("AchingBalls", new DateTime(2023, 10, 5, 10, 5, 0)),
        new Programme("YellowMonster", new DateTime(2023, 10, 5, 11, 5, 0)),
        new Programme("BleedingSkulls", new DateTime(2023, 10, 5, 12, 5, 0)),
        new Programme("BurstToLaugh", new DateTime(2023, 10, 5, 13, 5, 0)),
        new Programme("PinkSkies", new DateTime(2023, 10, 5, 14, 5, 0)),
    };
}