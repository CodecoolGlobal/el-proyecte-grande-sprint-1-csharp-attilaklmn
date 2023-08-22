using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using webapi.Model;
using webapi.Model.Entity;
using webapi.Service;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Configuration.Json;

namespace webapi.Controllers;


[ApiController]
[Route("[controller]")]
public class UserController : ControllerBase
{
    private readonly IUserService _userService;
    private readonly IConfiguration _configuration;

    public UserController(IUserService userService, IConfiguration configuration)
    {
        _userService = userService;
        _configuration = configuration;
    }

    [HttpPost("login")]
    public async Task<IActionResult> LoginUser([FromBody] LoginModelDto loginModelDto)
    {
        var user = await _userService.LoginUserAsync(loginModelDto);
        
        var token = GenerateJwtToken(user);

        return Ok(new { Token = token, Message = "User logged in!" });
    }
    [HttpPost("register")]
    public async Task<IActionResult> RegisterUser([FromBody] RegistrationModelDto registrationModelDto)
    {
        await _userService.RegisterUserAsync(registrationModelDto);
        return Ok("User created successfully!");
    }

    private string GenerateJwtToken(User user)
    {
        var secretKey = _configuration["JWTSettings:SecretKey"];
        var key = Encoding.UTF8.GetBytes(secretKey);

        var tokenHandler = new JwtSecurityTokenHandler();
        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(new[]
            {
                new Claim(ClaimTypes.Name, user.Username),
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Role, user.Admin ? "admin" : "user"),
            }),
            Expires = DateTime.UtcNow.AddHours(1),
            SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
        };

        var token = tokenHandler.CreateToken(tokenDescriptor);
        return tokenHandler.WriteToken(token);
    }
}