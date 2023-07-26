namespace webapi.Model;

public class Programme
{
    public string MovieTitle { get; }

    public DateTime AirTime { get; }

    public Programme(string movieTitle, DateTime airTime)
    {
        MovieTitle = movieTitle;
        AirTime = airTime;
    }
}