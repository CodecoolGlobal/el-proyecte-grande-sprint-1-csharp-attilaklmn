namespace webapi.Model
{
    public class Ticket
    {
        public Guid Id { get; set; }
        public Guid ScreeningId { get; set; }
        public Guid SeatId { get; set; }
        public bool Finalized { get; set; }

        public Ticket(Guid screeningId, Guid seatId)
        {
            Id = Guid.NewGuid();
            ScreeningId = screeningId;
            SeatId = seatId;
            Finalized = false;
        }

        public void SetFinalized()
        {
            Finalized = true;
        }
    }
}
