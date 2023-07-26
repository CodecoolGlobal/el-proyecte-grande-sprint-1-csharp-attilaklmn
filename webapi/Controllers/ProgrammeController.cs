using Microsoft.AspNetCore.Mvc;
using webapi.Service;

namespace webapi.Controllers;

[ApiController]
[Route("[controller]")]
public class ProgrammeController : ControllerBase
{
    private IProgramService _programService;

    public ProgrammeController(IProgramService programService)
    {
        _programService = programService;
    }

    [HttpGet("/allprogrammes")]
    public IActionResult GetPrograms()
    {
        return Ok(_programService.GetPrograms());
    }
    
}