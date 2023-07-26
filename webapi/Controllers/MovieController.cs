﻿using Microsoft.AspNetCore.Mvc;

namespace webapi.Controllers;

[ApiController, Route("/list")]

public class MovieController : ControllerBase
{
    private readonly IMovieService<Movie> _movieService;

    public MovieController(IMovieService<Movie> movieService)
    {
        _movieService = movieService;
    }

    [HttpGet]
    public ActionResult Index()
    {
        var movies = _movieService.GetAll();
        return Ok(movies);
    }
}