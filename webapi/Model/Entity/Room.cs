using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace webapi.Model.Entity
{
    public class Room
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }
        public string Name { get; set; } = null!;
        public int RowNumber { get; set; }
        public int ColumnNumber { get; set; }
        public ICollection<Seat> Seats { get; set; } = null!;

    }


}
