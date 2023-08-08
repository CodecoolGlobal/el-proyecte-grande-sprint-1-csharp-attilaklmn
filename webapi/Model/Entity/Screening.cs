using System.ComponentModel.DataAnnotations.Schema;

namespace webapi.Model.Entity
{
    public class Screening
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }
        public Room Room { get; set; } = null!;
        public Movie Movie { get; set; } = null!;
        public DateTime StartingDate { get; set; }
    }
}
