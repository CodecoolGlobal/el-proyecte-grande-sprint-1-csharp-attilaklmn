using Microsoft.AspNetCore.Mvc;
using webapi.Model;
using webapi.Model.Entity;
using webapi.Service;

namespace webapi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TicketController : ControllerBase
    {
        private ITicketService _reservationService;

        public TicketController (ITicketService reservationService)
        {
            _reservationService = reservationService;
        }

        //[HttpPost("reserve")]
        //public IActionResult Reserve([FromBody] Ticket reservation)
        //{
        //    bool done = _reservationService.ReserveIfPossible(reservation);
        //    if (done)
        //    {
        //        return Ok();
        //    }
        //    return BadRequest();
        //}

        //[HttpPost("isseatreserved")]
        //public IActionResult IsSeatReserved([FromBody] ReservedChecker reservedChecker)
        //{
        //    bool isSeatReserved = _reservationService.IsSeatReserved(reservedChecker);
            
        //    return Ok(new { reserved = isSeatReserved });
        //}

        //[HttpGet("screening/{screeningId}")]
        //public IActionResult GetReservedSeatsByScreeningId(Guid screeningId)
        //{
        //    IEnumerable<Guid> reservedSeats = _reservationService.GetReservedSeatsByScreeningId(screeningId);
        //    return Ok(reservedSeats);
        //}
    }
}
