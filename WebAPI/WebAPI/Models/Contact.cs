namespace WebAPI.Models
{
    public class Contact
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Server { get; set; }
        public string Last { get; set; }
        public DateTime? Lastdate { get; set; }

        public Contact(string id, string name, string server, string last, DateTime? lastdate)
        {
            Id = id;
            Name = name;
            Server = server;
            Last = last;
            Lastdate = lastdate;
        }
    }
}
