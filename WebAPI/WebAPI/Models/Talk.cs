namespace WebAPI.Models
{
    public class Talk
    {
        public string Id { get; set; }
        public List<string> Talkers { get; set; }
        public List<Message> MessagesList { get; set; }

        public Talk(string id, List<string> talkers, List<Message> messagesList)
        {
            Id = id;
            Talkers = talkers;
            MessagesList = messagesList;
        }
    }
}
