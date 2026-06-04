using backend.Models;

namespace backend.Services;

public class TodoService : ITodoService
{
    private readonly List<Todo> _todos = new();
    private int _nextId = 1;

    public List<Todo> GetAll() => _todos;

    public Todo Add(TodoRequest request)
    {
        var todo = new Todo(
            _nextId++,
            request.Title.Trim(),
            request.Description,
            request.Category,
            request.Date,
            request.Time
        );
        _todos.Add(todo);
        return todo;
    }

    public bool Delete(int id)
    {
        var todo = _todos.FirstOrDefault(t => t.Id == id);
        if (todo is null) return false;
        _todos.Remove(todo);
        return true;
    }
}