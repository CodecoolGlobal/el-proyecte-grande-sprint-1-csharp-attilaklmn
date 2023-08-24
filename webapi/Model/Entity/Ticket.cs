using System.ComponentModel.DataAnnotations.Schema;

namespace webapi.Model.Entity
{
    public class Ticket
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }
        public Screening Screening { get; set; } = null!;
        public Seat Seat { get; set; } = null!;
        public long SeatId { get; set; }
        public User User { get; set; } = null!;
        public long UserId { get; set; }
        public bool Finalized { get; set; }

        public void Finalize()
        {
            Finalized = true;
        }
    }
}
