namespace webapi.Model
{
    public class Room
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public int RowNumber { get; set; }
        public int ColumnNumber { get; set; }
        public Dictionary<int, HashSet<Seat>> Seats { get; set; }

        public Room(string name, int rowNumber, int columnNumber)
        {
            Id = Guid.NewGuid();
            Name = name;
            RowNumber = rowNumber;
            ColumnNumber = columnNumber;
            Seats = new();
            CreateSeats(rowNumber, columnNumber);
        }

        private void CreateSeats(int row, int column)
        {
            for (int i = 1; i <= row; i++)
            {
                HashSet<Seat> seatRow = new();
                for (int j = 1; j <= column; j++)
                {
                    seatRow.Add(new Seat(Id, i, j));
                }
                Seats.Add(i, seatRow);
            }
        }
    }


}
