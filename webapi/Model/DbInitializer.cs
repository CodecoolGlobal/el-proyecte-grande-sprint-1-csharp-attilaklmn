using webapi.Data;
using webapi.Model.Entity;

namespace webapi.Model;

public class DbInitializer
{
    public static void Initialize(CinemaSharpContext context)
    {
        context.Database.EnsureCreated();
        
        if (!context.Movies.Any())
        {
            
            HashSet<Movie> movies = new()
            {
                new Movie
                {
                    Title = "Barbie",
                    Cast = new[] { "Margot Robbie", "Ryan Gosling" },
                    Summary = "Barbie and Ken are having the time of their lives in the colorful and " +
                              "seemingly perfect world of Barbie Land. However, when they get a chance" +
                              " to go to the real world, they soon discover the joys and perils of living among humans."
                },
                new Movie
                {
                    Title = "Oppenheimer",
                    Cast = new[] { "Cillian Murphy", "Florence Pugh" },
                    Summary =
                        "During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to" +
                        " work on the top-secret Manhattan Project. Oppenheimer and a team of scientists" +
                        " spend years developing and designing the atomic bomb. Their work comes to fruition" +
                        " on July 16, 1945, as they witness the world's first nuclear explosion," +
                        " forever changing the course of history."
                },
                new Movie
                {
                    Title = "Cobweb",
                    Cast = new[] { "Antony Starr", "Lizzy Caplan" },
                    Summary =
                        "Young Peter is plagued by a mysterious, constant noise from inside his bedroom wall -- " +
                        "a tapping that his parents insist is in his imagination. As his fear intensifies, " +
                        "he starts to believe that his parents are hiding a terrible and dangerous secret."
                },
                new Movie
                {
                    Title = "Dark Windows",
                    Cast = new[] { "Annie Hamilton", "Rory Alexander" },
                    Summary =
                        "A group of teenagers takes a trip to an isolated farmhouse in the countryside. " +
                        "What starts as a peaceful getaway soon turns into a horrific nightmare when" +
                        " a masked killer begins to terrorize them in the most gruesome ways."
                },
                new Movie
                {
                    Title = "Elemental",
                    Cast = new[] { "LEah Lewis", "Catherine O'Hara" },
                    Summary =
                        "In a city where fire, water, land, and air residents live together, " +
                        "a fiery young woman and a go-with-the-flow guy discover something elemental:" +
                        " how much they actually have in common."
                },
                new Movie
                {
                    Title = "Gran Turismo",
                    Cast = new[] { "Orlando Bloom", "David Harbour" },
                    Summary =
                        "A player wins a series of Nissan-sponsored video game competitions through his gaming skills" +
                        " and becomes a real-life professional race car driver."
                },
                new Movie
                {
                    Title = "Haunted Mansion",
                    Cast = new[] { "Jared Leto", "Danny Devito" },
                    Summary =
                        "A woman and her son enlist a motley crew of so-called spiritual experts to help rid their home of supernatural squatters."
                },
                new Movie
                {
                    Title = "Indiana Jones and the Dial of Destiny",
                    Cast = new[] { "Harrison Ford", "Mads Mikkelsen" },
                    Summary =
                        "Daredevil archaeologist Indiana Jones races against time to retrieve a legendary dial that" +
                        " can change the course of history. Accompanied by his goddaughter, he soon finds himself squaring off" +
                        " against Jürgen Voller, a former Nazi who works for NASA."
                },
                new Movie
                {
                    Title = "Insidious: The Red Door",
                    Cast = new[] { "Ty Simpkins", "Patrick Wilson" },
                    Summary =
                        "Josh Lambert heads east to drop his son, Dalton, off at school. However, Dalton's college dream soon becomes a living nightmare" +
                        " when the repressed demons of his past suddenly return to haunt them both."
                },
                new Movie
                {
                    Title = "Ladybug & Cat Noir: The Movie",
                    Cast = new[] { "Christina Wee", "Selah Victor" },
                    Summary =
                        "Bestowed with magical powers of creation, Ladybug must unite with her opposite, Cat Noir," +
                        " to save Paris as a villain unleashes chaos into the city."
                },
                new Movie
                {
                    Title = "Mission impossible 7",
                    Cast = new[] { "Tom Cruise", "Hayley Atwell" },
                    Summary =
                        "Ethan Hunt and the IMF team must track down a terrifying new weapon that threatens all of humanity" +
                        " if it falls into the wrong hands. With control of the future and the fate of the world at stake, " +
                        "a deadly race around the globe begins. Confronted by a mysterious, all-powerful enemy," +
                        " Ethan is forced to consider that nothing can matter more than the mission -- " +
                        "not even the lives of those he cares about most."
                }
            };
            context.Movies.AddRange(movies);
        }
        if (!context.Rooms.Any())
        {
            HashSet<Room> rooms = new()
            {
                new Room
                {
                    ColumnNumber = 20,
                    RowNumber = 16,
                    Name = "BallBuster",
                    Seats = CreateSeats(20, 16, context)
                },
                new Room
                {
                    ColumnNumber = 12,
                    RowNumber = 8,
                    Name = "HappyFears",
                    Seats = CreateSeats(12, 8, context)
                },
                new Room
                {
                    ColumnNumber = 15,
                    RowNumber = 9,
                    Name = "SnowTrack",
                    Seats = CreateSeats(15, 9, context)
                },
                new Room
                {
                    ColumnNumber = 11,
                    RowNumber = 7,
                    Name = "FunnyDoors",
                    Seats = CreateSeats(11, 7, context)
                }
            };
            context.Rooms.AddRange(rooms);
            context.SaveChanges();
        }
    }
    
    private static HashSet<Seat> CreateSeats(int column, int row, CinemaSharpContext context)
    {
        HashSet<Seat> seats = Enumerable.Range(1, row)
            .SelectMany(i => Enumerable.Range(1, column).Select(j => new Seat { Row = i, Number = j })).ToHashSet();
        context.Seats.AddRange(seats);
        
        return seats;
    }
}