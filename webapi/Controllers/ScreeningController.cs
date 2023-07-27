using Microsoft.AspNetCore.Mvc;
using webapi.Model;
using webapi.Service;

namespace webapi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ScreeningController : ControllerBase
    {
        private IScreeningService<Screening> _screeningService;

        public ScreeningController(IScreeningService<Screening> screeningService)
        {
            _screeningService = screeningService;
        }

        [HttpGet("all")]
        public IActionResult GetAll()
        {
            return Ok(_screeningService.GetAll());
        }
    }
}
