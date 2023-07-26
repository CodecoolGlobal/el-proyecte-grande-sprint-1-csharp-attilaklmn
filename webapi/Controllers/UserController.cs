using Microsoft.AspNetCore.Mvc;
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
    public IActionResult LoginUser()
    {
        return Ok();
    }
}