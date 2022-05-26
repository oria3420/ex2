namespace WebAPI.Models.Response
{
    public class PostContactResponse
    {
        public string Contact { get; set; }
        public PostContactResponse(string contact)
        {
            Contact = contact;
        }
    }
}
