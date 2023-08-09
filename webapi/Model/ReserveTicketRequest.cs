namespace webapi.Model
{
    public class ReserveTicketRequest
    {
        public long ScreeningId { get; set; }
        public long SeatId { get; set; }
        public long UserId { get; set; }
    }
}
