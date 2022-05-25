using WebAPI.Models;

namespace WebAPI.Services
{
    public class UserDataService : IDataService<User>
    {
        private static List<User> _users = new List<User>()
        {
            new User("carly", "123456Aa", "Carly Rose", "http://localhost:5235"),
            new User("bob", "123456Aa", "Bob Cohen", "http://localhost:5235"),
            new User("eli", "123456Aa", "Eli Vos", "http://localhost:5235"),
            new User("kate", "123456Aa", "Kate Portman", "http://localhost:5235")
        };
        public void Add(User item)
        {
            _users.Add(item);
        }

        public static void StartContacts()
        {
            var talkService = new TalkDataService();
            var userService = new UserDataService();

           foreach(var talk in talkService.GetAll())
            {
                foreach(var userId in talk.Talkers)
                {
                    var user = userService.Get(userId);
                    var secondUserId = talk.Talkers.Find(id => id != userId);
                    
                    var sUser = userService.Get(secondUserId);
                    var lastTime = talk.MessagesList.Max(m => m.Created);
                    var lastMsg = talk.MessagesList.Find(m => m.Created == lastTime);

                    var contactA = new Contact(sUser.Id, sUser.Name, sUser.Server, lastMsg.Content, lastTime);
                    var contactB = new Contact(user.Id, user.Name, user.Server, lastMsg.Content, lastTime);
                    if (user.Contacts.Find(c => c.Id == contactA.Id) == null)
                        user.AddContact(contactA);

                    if (sUser.Contacts.Find(c => c.Id == contactB.Id) == null)
                        sUser.AddContact(contactB);
                }
            }
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
