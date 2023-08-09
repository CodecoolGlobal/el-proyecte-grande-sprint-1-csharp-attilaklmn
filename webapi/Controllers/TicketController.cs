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
        private ITicketService _ticketService;

        public TicketController (ITicketService ticketService)
        {
            _ticketService = ticketService;
        }

        [HttpPost("reserve")]
        public async Task<IActionResult> Reserve(ReserveTicketRequest request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            bool reservationResult = await _ticketService.ReserveTicket(request);

            if (reservationResult)
            {
                return Ok("Ticket reserved successfully.");
            }
            else
            {
                return BadRequest("Failed to reserve the ticket.");
            }
        }

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
