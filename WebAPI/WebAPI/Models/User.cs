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
            Image = "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg";
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
