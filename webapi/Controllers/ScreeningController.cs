using Microsoft.AspNetCore.Mvc;
using webapi.Model.Entity;
using webapi.Service;

namespace webapi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ScreeningController : ControllerBase
    {
        private IScreeningService _screeningService;

        public ScreeningController(IScreeningService screeningService)
        {
            _screeningService = screeningService;
        }

        [HttpGet("all")]
        public async Task<IEnumerable<Screening>> GetAll()
        {
            return await _screeningService.GetAll();
        }

        //[HttpGet("/screeningByMovieId/{id}")]
        //public IActionResult GetScreenings(Guid id)
        //{
        //    return Ok(_screeningService.GetAll().Where(x => x.IsThisThatMovie(id)).ToList());
        //}

        //[HttpGet("/isThereScreening/{id}")]
        //public IActionResult IsThereScreen(Guid id)
        //{
        //    bool answer = _screeningService.GetAll().Any(x => x.IsThisThatMovie(id));
        //    return Ok((new { result = answer }));
        //}
    }
}
