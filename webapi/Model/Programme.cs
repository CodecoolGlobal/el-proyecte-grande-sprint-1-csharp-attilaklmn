namespace webapi.Model;

public class Programme
{
    public string MovieTitle { get; }

    public DateTime AirTime { get; }
    
    public int Id { get; }
    private static int _idCount = 0;

    public Programme(string movieTitle, DateTime airTime)
    {
        MovieTitle = movieTitle;
        AirTime = airTime;
        Id = ++_idCount;
    }
}