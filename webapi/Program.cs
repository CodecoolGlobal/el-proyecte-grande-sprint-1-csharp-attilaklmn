using Microsoft.EntityFrameworkCore;
using webapi.Data;
using webapi.Service;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<CinemaSharpContext>(options =>
                options.UseNpgsql(Environment.GetEnvironmentVariable("CONNECTION_STRING")));
// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddTransient<IMovieService, MovieService>();
builder.Services.AddSingleton<ITicketService, TicketService>();
builder.Services.AddSingleton<IScreeningService, ScreeningService>();
builder.Services.AddSingleton<IRoomService, RoomService>();
builder.Services.AddSingleton<IUserService, UserService>();


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
