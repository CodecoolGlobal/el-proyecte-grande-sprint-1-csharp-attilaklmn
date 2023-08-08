using Microsoft.EntityFrameworkCore;
using webapi.Model.Entity;

namespace webapi.Data
{
    public class CinemaSharpContext : DbContext
    {
        public CinemaSharpContext(DbContextOptions<CinemaSharpContext> options) : base(options)
        {

        }
        public DbSet<Ticket> Tickets { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Seat> Seats { get; set; }
        public DbSet<Room> Rooms { get; set; }
        public DbSet<Screening> Screenings { get; set; }
        public DbSet<Movie> Movies { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Ticket>().ToTable("Ticket");
            modelBuilder.Entity<User>().ToTable("User");
            modelBuilder.Entity<Seat>().ToTable("Seat");
            modelBuilder.Entity<Room>().ToTable("Room");
            modelBuilder.Entity<Screening>().ToTable("Screening");
            modelBuilder.Entity<Movie>().ToTable("Movie");
        }
    }
}
