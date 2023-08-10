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

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(long id)
        {
            var room = await _roomService.GetById(id);
            if (room == null)
            {
                return NotFound();
            }
            return Ok(room);
        }

        [HttpGet("{id}/seats")]
        public async Task<IActionResult> GetSeats(long id)
        {
            var seats = await _roomService.GetSeatsById(id);
            return Ok(seats);
        }
    }
}
