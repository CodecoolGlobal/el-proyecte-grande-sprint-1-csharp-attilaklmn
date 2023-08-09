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
    public IActionResult LoginUser([FromBody] UserModelDto userModelDto)
    {
        HttpResponseModel httpResponse = _userService.LoginUser(userModelDto);
        return StatusCode(httpResponse.StatusCode, new { Message = httpResponse.Message });
    }
    [HttpPost("register")]
    public async Task<IActionResult> RegisterUser([FromBody] RegistrationModelDto registrationModelDto)
    {
        await _userService.RegisterUserAsync(registrationModelDto);
        return Ok("User created successfully!");
    }
}