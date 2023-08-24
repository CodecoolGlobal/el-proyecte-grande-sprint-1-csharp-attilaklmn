using System.IdentityModel.Tokens.Jwt;
using System.Net.Http.Headers;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using webapi.Model;
using webapi.Model.Entity;
using webapi.Service;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Configuration.Json;
using webapi.Model.DTOs;

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

    [Authorize]
    [HttpPatch("mailchange")]
    public async Task<IActionResult> ChangeMail([FromBody] MailChangeModel mailChangeModel)
    {

        var authorizationHeader = AuthenticationHeaderValue.Parse(Request.Headers["Authorization"]);
        var token = authorizationHeader.Parameter;

        var tokenHandler = new JwtSecurityTokenHandler();
        var jwtToken = tokenHandler.ReadJwtToken(token);
        var uniqueNameClaim = jwtToken.Claims.FirstOrDefault(c => c.Type == "unique_name");
        string username = uniqueNameClaim?.Value;

        if (string.IsNullOrEmpty(username))
        {
            return BadRequest("Username claim not found in token.");
        }
        await _userService.ChangeEmailAsync(username, mailChangeModel.Password, mailChangeModel.Email);
        return Ok("Email changed!");
    }
    
    [Authorize]
    [HttpPatch("passwordChange")]
    public async Task<IActionResult> ChangePassword([FromBody] PasswordChangeModel passwordChangeModel)
    {

        var authorizationHeader = AuthenticationHeaderValue.Parse(Request.Headers["Authorization"]);
        var token = authorizationHeader.Parameter;

        var tokenHandler = new JwtSecurityTokenHandler();
        var jwtToken = tokenHandler.ReadJwtToken(token);
        var uniqueNameClaim = jwtToken.Claims.FirstOrDefault(c => c.Type == "unique_name");
        string username = uniqueNameClaim?.Value;

        if (string.IsNullOrEmpty(username))
        {
            return BadRequest("Username claim not found in token.");
        }
        await _userService.ChangePasswordAsync(username, passwordChangeModel.Password, passwordChangeModel.ConfirmPassword);
        return Ok("Password changed!");
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