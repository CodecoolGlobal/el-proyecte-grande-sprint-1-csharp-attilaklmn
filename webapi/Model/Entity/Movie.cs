using System.ComponentModel.DataAnnotations.Schema;

namespace webapi.Model.Entity;

public class Movie
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public long Id { get; set; }
    public string Title { get; set; } = null!;
    public string[]? Cast { get; set; }
    public string? Summary { get; set; }
    public double? UserRating { get; set; }

    public bool IsThisThatMovie(long movieId)
    {
        return Id == movieId;
    }

}