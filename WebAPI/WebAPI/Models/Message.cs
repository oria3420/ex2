namespace WebAPI.Models
{
    public class Message
    {
        public string Id { get; set; }
        public string Content { get; set; }
        public DateTime Created { get; set; }
        public bool Sent { get; set; }
        public string SentBy { get; set; }

        public Message(string id, string content, DateTime created, bool sent, string sentBy)
        {
            Id = id;
            Content = content;
            Created = created;
            Sent = sent;
            SentBy = sentBy;
        }
    }
}
