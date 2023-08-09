using System.ComponentModel.DataAnnotations.Schema;

namespace webapi.Model.Entity
{
    public class Seat
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }
        public Room Room { get; set; } = null!;
        public int Row { get; set; }
        public int Number { get; set; }
    }
}
