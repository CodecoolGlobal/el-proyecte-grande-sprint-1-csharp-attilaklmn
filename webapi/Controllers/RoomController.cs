using Microsoft.AspNetCore.Mvc;
using webapi.Model.Entity;
using webapi.Service;

namespace webapi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RoomController : ControllerBase
    {
        private IRoomService _roomService;

        public RoomController(IRoomService roomService)
        {
            _roomService = roomService;
        }

        //[HttpGet("{id}")]
        //public IActionResult GetById(Guid id)
        //{
        //    var room = _roomService.GetById(id);
        //    if (room == null)
        //    {
        //        return NotFound();
        //    }
        //    return Ok(room);
        //}

        //[HttpGet("{id}/seats")]
        //public IActionResult GetSeats(Guid id)
        //{
        //    var seats = _roomService.GetSeats(id);
        //    return Ok(seats);
        //}
    }
}
