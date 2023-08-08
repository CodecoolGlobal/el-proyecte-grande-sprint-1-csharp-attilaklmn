using System.ComponentModel.DataAnnotations.Schema;

namespace webapi.Model.Entity;

public class Movie
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public long Id { get; }
    public string Title { get; set; } = null!;
    public string[]? Cast { get; set; }
    public string? Summary { get; set; }
    public double? UserRating { get; set; }

}