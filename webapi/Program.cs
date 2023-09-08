using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using webapi;
using webapi.Data;
using webapi.Model;
using webapi.Service;
using webapi.Service.SubService;

var builder = WebApplication.CreateBuilder(args);

var connectionString = Environment.GetEnvironmentVariable("CONNECTION_STRING");

builder.Services.AddDbContext<CinemaSharpContext>(options =>
                options.UseNpgsql("Host=trumpet.db.elephantsql.com;Port=5432;Database=jfteeekn;Username=jfteeekn;Password=5408W67bMpL4DB3O7BMlvoo_YhAs_dlm;"));

// Auth
var configuration = new ConfigurationBuilder()
    .SetBasePath(builder.Environment.ContentRootPath)
    .AddJsonFile("appsettings.json")
    .Build();

var secretKey = configuration["JWTSettings:SecretKey"];
var key = Encoding.UTF8.GetBytes(secretKey);

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = false,
            ValidateAudience = false,
            ValidateIssuerSigningKey = true,
            ValidIssuer = "your-issuer",
            ValidAudience = "your-audience",
            IssuerSigningKey = new SymmetricSecurityKey(key)
        };
    });

// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddSingleton(configuration);
builder.Services.AddTransient<IMovieService, MovieService>();
builder.Services.AddTransient<ITicketService, TicketService>();
builder.Services.AddTransient<IScreeningService, ScreeningService>();
builder.Services.AddTransient<IRoomService, RoomService>();
builder.Services.AddTransient<IUserService, UserService>();
builder.Services.AddTransient<IUserDataValidator, UserDataValidator>();


// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();


using (var scope = app.Services.CreateScope())
{
    var serviceProvider = scope.ServiceProvider;
    var dbContext = serviceProvider.GetRequiredService<CinemaSharpContext>();
    DbInitializer.Initialize(dbContext);
}

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();


app.UseAuthentication();

app.UseAuthorization();

app.UseMiddleware<ErrorHandlingMiddleware>();

app.MapControllers();

app.Run();
