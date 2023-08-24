using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
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
        
        [HttpGet("screening/{screeningId}")]
        public async Task<IActionResult> GetReservedSeatIdsByScreeningId(long screeningId)
        {
            IEnumerable<Ticket> reservedTickets = await _ticketService.GetTicketsByScreeningId(screeningId);
            return Ok(reservedTickets);
        }
        [Authorize]
        [HttpGet("{screeningId}/{userId}")]
        public async Task<IActionResult> GetUnfinalizedTickets(long screeningId, long userId)
        {
            IEnumerable<Ticket> reservedTickets = await _ticketService.GetUnfinalizedTickets(screeningId, userId);
            return Ok(reservedTickets);
        }

        [Authorize]
        [HttpPatch("finalize/{userId}")]
        public async Task<IActionResult> FinalizeTickets(long userId, [FromBody] IEnumerable<long> ticketIds)
        {
            var userIdFromToken = User.FindFirstValue(ClaimTypes.NameIdentifier);
            if (userIdFromToken != userId.ToString())
            {
                return Forbid();
            }
            bool isFinalized = await _ticketService.FinalizeTickets(ticketIds);
            if (isFinalized)
            {
                return Ok("oks");
            } else
            {
                return BadRequest();
            }
        }
    }
}
