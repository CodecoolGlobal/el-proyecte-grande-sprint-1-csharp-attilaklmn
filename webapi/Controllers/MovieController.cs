using Microsoft.AspNetCore.Mvc;
using webapi.Model.Entity;
using webapi.Service;

namespace webapi.Controllers;

[ApiController, Route("/list")]

public class MovieController : ControllerBase
{
    private readonly IMovieService _movieService;

    public MovieController(IMovieService movieService)
    {
        _movieService = movieService;
    }

    [HttpGet]
    public ActionResult Index()
    {
        var movies = _movieService.GetAll();
        return Ok(movies);
    }

    //[HttpGet("{id}")]
    //public IActionResult GetById(Guid id)
    //{
    //    var movie = _movieService.GetById(id);
    //    if (movie == null)
    //    {
    //        return NotFound();
    //    }
    //    return Ok(movie);
    //}
}