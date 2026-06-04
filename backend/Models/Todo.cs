namespace backend.Models;

public record Todo(int Id, string Title, string? Description, string? Category, string? Date, string? Time);
public record TodoRequest(string Title, string? Description, string? Category, string? Date, string? Time);