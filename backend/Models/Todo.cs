namespace backend.Models;

public record Todo(int Id, string Title, bool IsCompleted);
public record TodoRequest(string Title);