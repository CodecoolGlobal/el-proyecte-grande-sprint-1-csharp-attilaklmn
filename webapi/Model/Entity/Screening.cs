using System.ComponentModel.DataAnnotations.Schema;

namespace webapi.Model.Entity
{
    public class Screening
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }
        public long RoomId { get; set; }
        public long MovieId { get; set; }
        public DateTime StartingDate { get; set; }
    }
}
