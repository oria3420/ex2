using Microsoft.AspNetCore.Mvc;
using WebAPI.Models;
using WebAPI.Models.Requests;
using WebAPI.Services;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TransferController : Controller
    {
        private IDataService<User> userService;
        private IDataService<Talk> talkService;

        public TransferController()
        {
            userService = new UserDataService();
            talkService = new TalkDataService();
        }

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

        // POST: api/<TransferController>
        [Route("/api/transfer")]
        [HttpPost]
        public IActionResult Post([FromBody] PostTransferRequest request)
        {
            Talk talk = getTalk(request.To, request.From);
            if (talk == null) return NotFound();

            int msgId = 0;
            string msgIdStr;
            if (talk.MessagesList.Count > 0)
            {
                msgId = Int32.Parse(talk.MessagesList[talk.MessagesList.Count - 1].Id) + 1;
            }
            msgIdStr = msgId.ToString();
            Message message = new Message(msgIdStr, request.Content, DateTime.Now, true, request.From);

            var userFrom = userService.Get(request.From);
            if(userFrom != null)
            {
                var contactA = userFrom.Contacts.Find(c => c.Id == request.To);
                contactA.Last = request.Content;
                contactA.Lastdate = DateTime.Now;
            }

            var userTo = userService.Get(request.To);
            var contactB = userTo.Contacts.Find(c => c.Id == request.From);
            contactB.Last = request.Content;
            contactB.Lastdate = DateTime.Now;

            talk.MessagesList.Add(message);

            return StatusCode(201);
        }
    }
}
