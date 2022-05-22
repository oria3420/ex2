using Microsoft.AspNetCore.Mvc;
using WebAPI.Models;
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
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<ContactsController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
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
