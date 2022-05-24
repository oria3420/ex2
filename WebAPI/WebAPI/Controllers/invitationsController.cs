using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Models;
using WebAPI.Models.Requests;
using WebAPI.Services;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class invitationsController : Controller
    {
        private IDataService<User> userService;

        public invitationsController()
        {
            userService = new UserDataService();
        }

        // POST: api/<invitationsController>
        [Route("/api/invitations")]
        [HttpPost]

        public IActionResult Post([FromBody] PostInvitationRequest request)
        {
            var userObjectFrom = userService.Get(request.From);
            if (userObjectFrom == null) return NotFound();

            var contactTo = userObjectFrom.Contacts.Find(c => c.Id == request.To);
            if (contactTo == null) return NotFound();
            userObjectFrom.AddContact(contactTo);
        }

}
}
