using Microsoft.AspNetCore.Mvc;
using webapi.Service;

namespace webapi.Controllers;

[ApiController]
[Route("[controller]")]
public class ProgramController : ControllerBase
{
    private IProgramService _programService;

    public ProgramController(IProgramService programService)
    {
        _programService = programService;
    }

    [HttpGet("/allprograms")]
    public IActionResult GetPrograms()
    {
        return Ok(_programService.GetPrograms());
    }

}