using WebAPI.Models;

namespace WebAPI.Services
{
    public class TalkDataService : IDataService<Talk>
    {
        private static List<Talk> _talks = new List<Talk>()
        {
            new Talk("1", new List<string> { "carly", "bob"}, new List<Message>
            {
                new Message("1", "Hey Bob!", DateTime.Now, true, "carly"),
                new Message("2", "Hey you!", DateTime.Now, true, "bob"),
                new Message("3", "Let's go to the cinema!", DateTime.Now, true, "carly"),
            }),
            new Talk("2", new List<string> { "carly", "eli"}, new List<Message>
            {
                new Message("1", "Hey Eli!", DateTime.Now, true, "carly"),
                new Message("2", "Hey you!", DateTime.Now, true, "eli"),
                new Message("3", "Let's go to the cinema!", DateTime.Now, true, "carly"),
            }),
            new Talk("3", new List<string> { "eli", "bob"}, new List<Message>
            {
                new Message("1", "Hey Bob!", DateTime.Now, true, "eli"),
                new Message("2", "Hey you!", DateTime.Now, true, "bob"),
                new Message("3", "Let's go to the cinema!", DateTime.Now, true, "eli"),
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
