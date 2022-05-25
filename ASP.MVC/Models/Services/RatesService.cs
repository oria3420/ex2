using WebAPI.Services;

namespace ASP.MVC.Models.Services
{
   
    public class RatesService : IRateService
    {

        private static List<Rate> rates = new List<Rate>()
        {
            new Rate("carly", 5, "mush!!!!"),
            new Rate("bob", 4, ";)"),
            new Rate("eli", 1, ":(")
        };
        public void Add(Rate item)
        {
            
            rates.Add(item);
        }

        public void Delete(int id)
        {
            
            rates.Remove(Get(id));
            
        }

        public Rate Get(int id)
        {
            return rates.Find(rate => rate.Id == id);
        }

        public List<Rate> GetAll()
        {
            return rates;
        }

        public void Update(Rate item)
        {
            Delete(item.Id);
            Add(item);
        }

        public string Average()
        {
            float sum = 0;
            foreach (Rate rate in rates)
                sum += rate.Rating;
            float avr = sum / rates.Count;
            return String.Format("{0:0.00}", avr);
        }
    }
}
