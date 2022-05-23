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
            var userObject = userService.Get(user);
            if (userObject == null) return NotFound();

            var contact = userObject.Contacts.Find(c => c.Id == id);
            if (contact == null) return NotFound();

            List<string> talkers;
            foreach (var talk in talkService.GetAll())
            {
                talkers = talk.Talkers.ToList();
                if (talkers.Contains(userObject.Id) && talkers.Contains(contact.Id))
                {
                    return Ok(talk.MessagesList);
                }
            }
            return NotFound();
        }
    }
}
