namespace ASP.MVC.Models.Services
{

    public interface IRateService
    {
        List<Rate> GetAll();
        Rate Get(int id);
        void Add(Rate item);
        void Update(Rate item);
        void Delete(int id);

        double Average();
    }
}
