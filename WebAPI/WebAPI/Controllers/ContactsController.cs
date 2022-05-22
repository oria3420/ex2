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

        // GET api/<ContactsController>/5
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

        // POST api/<ContactsController>
        [HttpPost]
        public IActionResult Post([FromBody] PostContactRequest request)
        {
            var user = userService.Get(request.User);
            if(user == null) return NotFound();

            var contact = new Contact(request.Id, request.Name, request.Server, null, null);
            user.Contacts.Add(contact);
            return StatusCode(201);
        }

        // PUT api/<ContactsController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<ContactsController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
