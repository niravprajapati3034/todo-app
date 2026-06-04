using backend.Models;

namespace backend.Services;

public interface ITodoService
{
    List<Todo> GetAll();
    Todo Add(TodoRequest request);
    bool Delete(int id);
}