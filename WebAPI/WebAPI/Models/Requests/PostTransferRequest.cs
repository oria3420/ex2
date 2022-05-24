namespace WebAPI.Models.Requests
{
    public class PostTransferRequest
    {
        public string From { get; set; }
        public string To { get; set; }
        public string Content { get; set; }
    }
}
