namespace WebAPI.Models.Response
{
    public class SignInResponse
    {
        public string Name { get; set; }
        public SignInResponse(string name)
        {
            Name = name;
        }
    }
}
