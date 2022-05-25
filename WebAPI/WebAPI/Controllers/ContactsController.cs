using Microsoft.AspNetCore.Mvc;
using WebAPI.Models;
using WebAPI.Models.Requests;
using WebAPI.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactsController : ControllerBase
    {
        private IDataService<User> userService;
        public ContactsController()
        {
            userService = new UserDataService();
        }

        // GET: api/<ContactsController>
        [Route("/api/contacts")]
        [HttpGet]
        public IActionResult Get(string user)
        {
            var userObject = userService.Get(user);
            if (userObject == null) return NotFound();
            return Ok(userObject.Contacts);
        }

        // POST api/<ContactsController>
        [Route("/api/contacts")]
        [HttpPost]
        public IActionResult Post([FromBody] PostContactRequest request)
        {
            var user = userService.Get(request.User);
            var user2 = userService.Get(request.Id);

            if (user == null) return NotFound();
            if (user2 == null) return NotFound();

            var contact = new Contact(request.Id, request.Name, request.Server, null, null);
            user.Contacts.Add(contact);


            var contact2 = new Contact(user.Id, user.Name, user.Server, null, null);
            user2.Contacts.Add(contact2);

            return StatusCode(201);
        }

        // GET api/<ContactsController>/id
        [Route("/api/contacts/{id}")]
        [HttpGet]
        public IActionResult Get(string user, string id)
        {
            var userObject = userService.Get(user);
            if (userObject == null) return NotFound();

            var contact = userObject.Contacts.Find(c => c.Id == id);
            if (contact == null) return NotFound();
            return Ok(contact);
        }

        // PUT api/<ContactsController>/id
        [Route("/api/contacts/{id}")]
        [HttpPut]
        public IActionResult Put(string id, [FromBody] PutContact request)
        {
            var user = userService.Get(request.User);
            var contact = user.Contacts.Find(c => c.Id == id);

            if (contact == null) return NotFound();

            contact.Name = request.Name;
            contact.Server = request.Server;

            return StatusCode(204);
        }

        // DELETE api/<ContactsController>/id
        [Route("/api/contacts/{id}")]
        [HttpDelete]
        public IActionResult Delete(string user, string id)
        {
            var userObject = userService.Get(user);
            if (userObject == null) return NotFound();

            var contact = userObject.Contacts.Find(c => c.Id == id);
            if (contact == null) return NotFound();

            userObject.Contacts.Remove(contact);
            return StatusCode(204);
        }
    }
}
