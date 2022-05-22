namespace WebAPI.Services
{
    public interface IDataService<T>
    {
        List<T> GetAll();
        T Get(string id);
        void Add(T item); 
        void Update(T item);
        void Delete(string id);
    }
}
