namespace webapi.Model
{
    public class ReservedChecker
    {
        public Guid ScreeningId { get; set; }
        public Guid SeatId { get; set; }

        public ReservedChecker(Guid screeningId, Guid seatId)
        {
            ScreeningId = screeningId;
            this.SeatId = seatId;
        }
    }
}
