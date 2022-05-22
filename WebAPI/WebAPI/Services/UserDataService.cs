using WebAPI.Models;

namespace WebAPI.Services
{
    public class UserDataService : IDataService<User>
    {
        private static List<User> _users = new List<User>()
        {
            new User("oriya", "123456Aa", "Oriya Yehudai", "http://localhost:5235"),
            new User("shira", "123456Aa", "Shira Taitelbaum", "http://localhost:5235"),
            new User("hodaya", "123456Aa", "Hodaya Levi", "http://localhost:5235")
        };
        public void Add(User item)
        {
            _users.Add(item);
        }

        public void Delete(string id)
        {
            _users.Remove(Get(id));
        }

        public User Get(string id)
        {
            return _users.Find(user => user.Id == id);
        }

        public List<User> GetAll()
        {
            return _users;
        }

        public void Update(User item)
        {
            Delete(item.Id);
            Add(item);
        }
    }
}
