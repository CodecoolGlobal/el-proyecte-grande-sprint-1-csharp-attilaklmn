namespace webapi.Model
{
    public class Seat
    {
        public Guid Id { get; set; }
        public Guid RoomId { get; set; }
        public int Row { get; set; }
        public int Number { get; set; }

        public Seat(Guid roomId, int row, int number)
        {
            Id = Guid.NewGuid();
            RoomId = roomId;
            Row = row;
            Number = number;
        }
    }
}
