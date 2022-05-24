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
        private IDataService<Talk> talkService;

        public invitationsController()
        {
            userService = new UserDataService();
            talkService = new TalkDataService();
        }

        // POST: api/<invitationsController>
        [Route("/api/invitations")]
        [HttpPost]

        public IActionResult Post([FromBody] PostInvitationRequest request)
        {
            var userObjectFrom = userService.Get(request.From);
            if (userObjectFrom == null) return NotFound();

            var userObjectTo = userService.Get(request.To);
            if (userObjectTo == null) return NotFound();

            var isExist = userObjectFrom.Contacts.Find(c => c.Id == request.To);
            if (isExist != null) return NotFound();

            Contact contactA = new Contact(userObjectFrom.Id, userObjectFrom.Name, request.Server, null, null);
            Contact contactB = new Contact(userObjectTo.Id, userObjectTo.Name, request.Server, null, null);

            userObjectFrom.AddContact(contactB);
            userObjectTo.AddContact(contactA);

            int talkId = Int32.Parse(talkService.GetAll()[talkService.GetAll().Count - 1].Id) + 1;
            string talkIdStr = talkId.ToString();

            Talk talk = new Talk(talkIdStr, new List<string> { userObjectFrom.Id, userObjectTo.Id }, new List<Message> { });

            talkService.Add(talk);

            return StatusCode(201);
        }

    }
}
