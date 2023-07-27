using Microsoft.AspNetCore.Mvc;
using webapi.Model;
using webapi.Service;

namespace webapi.Controllers;


[ApiController]
[Route("[controller]")]
public class UserController : ControllerBase
{
    private IUserService _userService;

    public UserController(IUserService userService)
    {
        _userService = userService;
    }

    [HttpPost("login")]
    public IActionResult LoginUser([FromBody] UserModelDTO userModelDto)
    {
        return Ok(_userService.LoginUser(userModelDto));
    }
    [HttpPost("register")]
    public IActionResult RegisterUser([FromBody] RegistrationModelDTO registrationModelDto)
    {
        return Ok(_userService.RegisterUser(registrationModelDto));
    }
}