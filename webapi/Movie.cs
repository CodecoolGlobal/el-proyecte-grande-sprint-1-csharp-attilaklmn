namespace webapi;

public class Movie
{
    public Guid Id { get; }
    public string Title { get; set; }
    public string[] Cast { get; set; }
    public string Summary { get; set; }
    public double UserRating { get; set; }

    public Movie(string title, string[] cast, string summary)
    {
        Id = Guid.NewGuid();
        Title = title;
        Cast = cast;
        Summary = summary;
        UserRating = 0;
    }
}