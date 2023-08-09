using Microsoft.EntityFrameworkCore;
using webapi;
using webapi.Data;
using webapi.Service;

var builder = WebApplication.CreateBuilder(args);

var connectionString = Environment.GetEnvironmentVariable("CONNECTION_STRING");

builder.Services.AddDbContext<CinemaSharpContext>(options =>
                options.UseNpgsql(connectionString));
// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddTransient<IMovieService, MovieService>();
builder.Services.AddTransient<ITicketService, TicketService>();
builder.Services.AddTransient<IScreeningService, ScreeningService>();
builder.Services.AddTransient<IRoomService, RoomService>();
builder.Services.AddTransient<IUserService, UserService>();


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

app.UseMiddleware<ErrorHandlingMiddleware>();

app.MapControllers();

app.Run();
