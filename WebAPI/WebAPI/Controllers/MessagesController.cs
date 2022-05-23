using Microsoft.AspNetCore.Mvc;
using WebAPI.Models;
using WebAPI.Models.Requests;
using WebAPI.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MessagesController : ControllerBase
    {
        private IDataService<User> userService;
        private IDataService<Talk> talkService;

        private Talk getTalk(string user, string id)
        {
            var userObject = userService.Get(user);
            if (userObject == null) return null;

            var contact = userObject.Contacts.Find(c => c.Id == id);
            if (contact == null) return null;

            List<string> talkers;
            foreach (var talk in talkService.GetAll())
            {
                talkers = talk.Talkers.ToList();
                if (talkers.Contains(userObject.Id) && talkers.Contains(contact.Id))
                {
                    return talk;
                }
            }
            return null;
        }
        public MessagesController()
        {
            userService = new UserDataService();
            talkService = new TalkDataService();
        }

        // GET api/<ContactsController>/id/messages
        [Route("/api/contacts/{id}/messages")]
        [HttpGet]
        public IActionResult Get(string user, string id)
        {
            Talk talk = getTalk(user, id);
            if(talk== null) return NotFound();

            return Ok(talk.MessagesList);
        }

        // POST api/<ContactsController>/id/messages
        [Route("/api/contacts/{id}/messages")]
        [HttpPost]
        public IActionResult Post(string id, [FromBody] PostMessageRequest request)
        {
            Talk talk = getTalk(request.User, id);
            if (talk == null) return NotFound();

            int msgId = talk.MessagesList[talk.MessagesList.Count - 1].Id;
            Message message = new Message(msgId+1, request.Content, DateTime.Now,true, request.User);

            talk.MessagesList.Add(message);

            return StatusCode(201);
        }
    }
}
