namespace WebAPI.Models
{
    public class User
    {
        public string Id { get; set; }
        public string Password { get; set; }
        public string Name { get; set; }
        public string Server { get; set; }
        public string Image { get; set; }
        public List<Contact> Contacts { get; set; }

        public User(string id, string password, string name, string server)
        {
            Id = id;
            Password = password;
            Name = name;
            Server = server;
            Contacts = new List<Contact>();
            Image = "https://www.popsci.com/uploads/2019/09/20/6EV2TTRN5VHSXCQOTLUEQV2ON4.jpg?auto=webp&width=1440&height=960";
        }

        public User(string id, string password, string name, string server, List<Contact> contacts)
        : this(id, password, name, server)
        {
            Contacts = contacts;
        }

        public void AddContact(Contact c)
        {
            Contacts.Add(c);
        }
    }
}
