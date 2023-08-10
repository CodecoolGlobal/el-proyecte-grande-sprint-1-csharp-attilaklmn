namespace webapi.Model
{
    public class ReserveTicketRequest
    {
        public long ScreeningId { get; set; }
        public long SeatId { get; set; }
        public string Username { get; set; }
    }
}
