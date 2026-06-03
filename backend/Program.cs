var builder = WebApplication.CreateBuilder(args);

builder.Services.AddOpenApi();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngular", policy =>
    {
        policy.WithOrigins("http://localhost:4200")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseCors("AllowAngular");

// In-memory TODO list
var todos = new List<Todo>();
var nextId = 1;

// Get all todos
app.MapGet("/api/todos", () => todos);

// Add todo
app.MapPost("/api/todos", (TodoRequest request) =>
{
    var todo = new Todo(nextId++, request.Title, false);
    todos.Add(todo);
    return Results.Created($"/api/todos/{todo.Id}", todo);
});

// Delete todo
app.MapDelete("/api/todos/{id}", (int id) =>
{
    var todo = todos.FirstOrDefault(t => t.Id == id);
    if (todo is null) return Results.NotFound();
    todos.Remove(todo);
    return Results.NoContent();
});

app.Run();

record Todo(int Id, string Title, bool IsCompleted);
record TodoRequest(string Title);