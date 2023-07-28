namespace webapi.Model
{
    public class Screening
    {
        public Guid Id { get; set; }
        public Guid RoomId { get; set; }
        public Guid MovieId { get; set; }
        public DateTime startingDate { get; set; }

        public Screening(Guid roomId, Guid movieId, DateTime startingDate)
        {
            Id = Guid.NewGuid();
            RoomId = roomId;
            MovieId = movieId;
            this.startingDate = startingDate;
        }

        public bool IsThisThatMovie(Guid id)
        {
            return MovieId == id;
        }
    }
}
