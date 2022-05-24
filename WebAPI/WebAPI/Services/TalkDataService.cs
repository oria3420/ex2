using WebAPI.Models;

namespace WebAPI.Services
{
    public class TalkDataService : IDataService<Talk>
    {
        private static List<Talk> _talks = new List<Talk>()
        {
            new Talk("1", new List<string> { "oriya", "shira"}, new List<Message>
            {
                new Message("1", "Hey Shira!", DateTime.Now, true, "oriya"),
                new Message("2", "Hey you!", DateTime.Now, true, "shira"),
                new Message("3", "Let's go to the cinema!", DateTime.Now, true, "oriya"),
            }),
            new Talk("2", new List<string> { "oriya", "hodaya"}, new List<Message>
            {
                new Message("1", "Hey Hodaya!", DateTime.Now, true, "oriya"),
                new Message("2", "Hey you!", DateTime.Now, true, "hodaya"),
                new Message("3", "Let's go to the cinema!", DateTime.Now, true, "oriya"),
            }),
            new Talk("3", new List<string> { "hodaya", "shira"}, new List<Message>
            {
                new Message("1", "Hey Shira!", DateTime.Now, true, "hodaya"),
                new Message("2", "Hey you!", DateTime.Now, true, "shira"),
                new Message("3", "Let's go to the cinema!", DateTime.Now, true, "hodaya"),
            })
        };
        public void Add(Talk item)
        {
            _talks.Add(item);
        }

        public void Delete(string id)
        {
            _talks.Remove(Get(id));
        }

        public Talk Get(string id)
        {
            return _talks.Find(talk => talk.Id == id);
        }

        public List<Talk> GetAll()
        {
            return _talks;
        }

        public void Update(Talk item)
        {
            Delete(item.Id);
            Add(item);
        }
    }
}
