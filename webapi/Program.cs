using webapi;

using webapi.Model;
using webapi.Repo;
using webapi.Service;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddSingleton<IMovieRepository<Movie>, MovieRepository>();
builder.Services.AddTransient<IMovieService<Movie>, MovieService>();
builder.Services.AddSingleton<IReservationRepository<Reservation>, ReservationRepository>();
builder.Services.AddSingleton<IReservationService<Reservation>, ReservationService>();
builder.Services.AddSingleton<IScreeningRepository<Screening>, ScreeningRepository>();
builder.Services.AddSingleton<IScreeningService<Screening>, ScreeningService>();
builder.Services.AddSingleton<IRoomRepository<Room>, RoomRepository>();
builder.Services.AddSingleton<IRoomService<Room>, RoomService>();


// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
