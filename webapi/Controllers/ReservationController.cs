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

        [HttpGet("reserve")]
        public IActionResult Reserve([FromBody] Reservation reservation)
        {
            bool done = _reservationService.ReserveIfPossible(reservation);
            if (done)
            {
                return Ok();
            }
            return BadRequest();
        }
    }
}
