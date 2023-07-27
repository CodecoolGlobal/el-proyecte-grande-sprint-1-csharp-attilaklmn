using Microsoft.AspNetCore.Mvc;
using webapi.Model;
using webapi.Service;

namespace webapi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ReservationController : ControllerBase
    {
        private IReservationService<Reservation> _reservationService;

        public ReservationController (IReservationService<Reservation> reservationService)
        {
            _reservationService = reservationService;
        }

        [HttpPost("reserve")]
        public IActionResult Reserve([FromBody] Reservation reservation)
        {
            bool done = _reservationService.ReserveIfPossible(reservation);
            if (done)
            {
                return Ok();
            }
            return BadRequest();
        }

        [HttpPost("isseatreserved")]
        public IActionResult IsSeatReserved([FromBody] ReservedChecker reservedChecker)
        {
            bool isSeatReserved = _reservationService.IsSeatReserved(reservedChecker);
            
            return Ok(new { reserved = isSeatReserved });
        }

        [HttpGet("screening/{screeningId}")]
        public IActionResult GetReservedSeatsByScreeningId(Guid screeningId)
        {
            IEnumerable<Guid> reservedSeats = _reservationService.GetReservedSeatsByScreeningId(screeningId);
            return Ok(reservedSeats);
        }
    }
}
