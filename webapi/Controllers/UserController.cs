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
        HttpResponseModel httpResponse = _userService.LoginUser(userModelDto);
        if (httpResponse.StatusCode == 200)
        {
            return Ok();
        } else
        {
            return StatusCode(httpResponse.StatusCode, new { Message = httpResponse.Message });
        }
    }
    [HttpPost("register")]
    public IActionResult RegisterUser([FromBody] RegistrationModelDTO registrationModelDto)
    {
        HttpResponseModel httpResponse = _userService.RegisterUser(registrationModelDto);
        if (httpResponse.StatusCode == 200)
        {
            return Ok();
        } else
        {
            return StatusCode(httpResponse.StatusCode, new { Message = httpResponse.Message });
        }
    }
}