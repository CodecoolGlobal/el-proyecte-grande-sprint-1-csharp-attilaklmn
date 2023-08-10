using Microsoft.AspNetCore.Mvc;
using webapi.Model;
using webapi.Service;

namespace webapi.Controllers;


[ApiController]
[Route("[controller]")]
public class UserController : ControllerBase
{
    private readonly IUserService _userService;

    public UserController(IUserService userService)
    {
        _userService = userService;
    }

    [HttpPost("login")]
    public async Task<IActionResult> LoginUser([FromBody] LoginModelDto loginModelDto)
    {
        await _userService.LoginUserAsync(loginModelDto);
        return Ok("User logged in!");
    }
    [HttpPost("register")]
    public async Task<IActionResult> RegisterUser([FromBody] RegistrationModelDto registrationModelDto)
    {
        await _userService.RegisterUserAsync(registrationModelDto);
        return Ok("User created successfully!");
    }

    [HttpPost("login/admin")]
    public async Task<IActionResult> LoginAdmin([FromBody] LoginModelDto loginModelDto)
    {
        await _userService.LoginAdminAsync(loginModelDto);
        return Ok("Admin logged in!");
    }
}