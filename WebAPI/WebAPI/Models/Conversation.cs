namespace WebAPI.Models
{
    public class Conversation
    {
        public int Id { get; set; }
        public List<string> Talkers { get; set; }
        public List<Message> MessagesList { get; set; }

        public Conversation(int id, List<string> talkers, List<Message> messagesList)
        {
            Id = id;
            Talkers = talkers;
            MessagesList = messagesList;
        }
    }
}
