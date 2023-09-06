using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using webapi.Model.DTOs;
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
    public async Task<IEnumerable<Movie>> Index()
    {
        return await _movieService.GetAll();
    }

    [HttpGet("{id}")]
    public async Task<IEnumerable<Movie>> GetMovieById(long id)
    {
        return await _movieService.GetMovieById(id);
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
    
    [HttpPost]
    [Authorize(Roles = "admin")]
    public IActionResult AddMovie([FromBody] MovieModelDto movieModelDto)
    {
        var addedMovie = _movieService.AddMovie(movieModelDto);

        return Ok(addedMovie);
    }
    
    [HttpDelete]
    [Authorize(Roles = "admin")]
    public IActionResult DeleteScreening([FromBody] long movieId)
    {
        bool deletion = _movieService.DeleteMovie(movieId);

        return Ok(deletion);
    }
}