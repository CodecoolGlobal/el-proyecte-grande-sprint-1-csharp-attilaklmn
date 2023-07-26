using Microsoft.AspNetCore.Mvc;
using webapi.Service;

namespace webapi.Controllers;


[ApiController]
[Route("user/[controller]")]
public class UserController : ControllerBase
{
    private IUserService _userService;

    public UserController(IUserService userService)
    {
        _userService = userService;
    }

    [HttpPost("user/login")]
    public IActionResult LoginUser()
    {
        return Ok();
    }
}