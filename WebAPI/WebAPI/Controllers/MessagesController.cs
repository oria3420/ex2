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

        private bool isLastMsg(Message msg, Talk talk)
        {
            string lastMsgId = talk.MessagesList[talk.MessagesList.Count - 1].Id;
            if (lastMsgId == msg.Id)
            {
                return true;
            }
            return false;
        }

        private void updateContact(string user1, string user2, string content)
        {
            var userObjectA = userService.Get(user1);
            var contactA = userObjectA.Contacts.Find(c => c.Id == user2);

            var userObjectB = userService.Get(user2);
            var contactB = userObjectB.Contacts.Find(c => c.Id == user1);

            contactA.Last = content;
            contactB.Last = content;

            if (content == null)
            {
                contactA.Lastdate = null;
                contactB.Lastdate = null;
            }
            else
            {
                contactA.Lastdate = DateTime.Now;
                contactB.Lastdate = DateTime.Now;
            }
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

        // GET api/<ContactsController>/id/messages
        [Route("/api/contacts/{id}/messages")]
        [HttpGet]
        public IActionResult Get(string user, string id)
        {
            Talk talk = getTalk(user, id);
            if (talk == null) return NotFound();

            return Ok(talk.MessagesList);
        }

        // POST api/<ContactsController>/id/messages
        [Route("/api/contacts/{id}/messages")]
        [HttpPost]
        public IActionResult Post(string id, [FromBody] PostMessageRequest request)
        {
            Talk talk = getTalk(request.User, id);
            if (talk == null) return NotFound();

            int msgId = 0;
            string msgIdStr;
            if (talk.MessagesList.Count > 0)
            {
                msgId = Int32.Parse(talk.MessagesList[talk.MessagesList.Count - 1].Id) + 1;
            }
            msgIdStr = msgId.ToString();
            Message message = new Message(msgIdStr, request.Content, DateTime.Now, true, request.User);

            updateContact(request.User, id, request.Content);

            talk.MessagesList.Add(message);

            return StatusCode(201);
        }

        // GET api/<ContactsController>/id1/messages/id2
        [Route("/api/contacts/{id}/messages/{id2}")]
        [HttpGet]
        public IActionResult Get(string user, string id, string id2)
        {
            Talk talk = getTalk(user, id);
            if (talk == null) return NotFound();

            Message message = talk.MessagesList.Find(c => c.Id == id2);
            if (message == null) return NotFound();

            return (Ok(message));
        }

        // PUT api/<ContactsController>/id1/messages/id2
        [Route("/api/contacts/{id}/messages/{id2}")]
        [HttpPut]
        public void Put(string id, string id2, [FromBody] PutMessage request)
        {
            Talk talk = getTalk(request.User, id);
            if (talk == null) return;

            Message message = talk.MessagesList.Find(c => c.Id == id2);
            if (message == null) return;

            message.Content = request.Content;

            if (isLastMsg(message, talk))
            {
                updateContact(request.User, id, request.Content);
            }


        }

        // DELETE api/<ContactsController>/id1/messages/id2
        [Route("/api/contacts/{id}/messages/{id2}")]
        [HttpDelete]
        public IActionResult Delete(string user, string id, string id2)
        {
            Talk talk = getTalk(user, id);
            if (talk == null) return NotFound();

            Message message = talk.MessagesList.Find(c => c.Id == id2);
            if (message == null) return NotFound();

            if (isLastMsg(message, talk) && talk.MessagesList.Count > 1)
            {
                Message newLastMsg = talk.MessagesList[talk.MessagesList.Count - 2];
                updateContact(user, id, newLastMsg.Content);
            }
            else
            {
                updateContact(user, id, null);
            }

            talk.MessagesList.Remove(message);

            return StatusCode(204);
        }
    }
}
