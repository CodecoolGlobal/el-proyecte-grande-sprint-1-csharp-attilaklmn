namespace webapi.Model
{
    public class Reservation
    {
        public Guid Id;
        public Guid ScreeningId;
        public Guid SeatId;
        public bool Finalized;

        public Reservation(Guid screeningId, Guid seatId)
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
