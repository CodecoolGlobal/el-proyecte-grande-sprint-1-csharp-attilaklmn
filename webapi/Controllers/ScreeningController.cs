using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using webapi.Model.DTOs;
using webapi.Model.Entity;
using webapi.Service;

namespace webapi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ScreeningController : ControllerBase
    {
        private readonly IScreeningService _screeningService;

        public ScreeningController(IScreeningService screeningService)
        {
            _screeningService = screeningService;
        }

        [HttpGet("all")]
        public async Task<IEnumerable<Screening>> GetAll()
        {
            return await _screeningService.GetAll();
        }

        [HttpGet("screeningByMovieId/{id}")]
        public async Task<IActionResult> GetScreeningsById(long id)
        {
            var screenings = await _screeningService.GetAll();
            var filteredScreenings = screenings.Where(x => x.MovieId == id).ToList();
            return Ok(filteredScreenings);
        }

        //[HttpGet("/isThereScreening/{id}")]
        //public IActionResult IsThereScreen(Guid id)
        //{
        //    bool answer = _screeningService.GetAll().Any(x => x.IsThisThatMovie(id));
        //    return Ok((new { result = answer }));
        //}
        
        [HttpPost]
        [Authorize(Roles = "admin")]
        public IActionResult AddScreening([FromBody] ScreeningModelDto screeningModelDto)
        {
            var addedScreening = _screeningService.AddScreening(screeningModelDto);

            return Ok(addedScreening);
        }
    }
}
