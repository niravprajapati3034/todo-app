// var builder = WebApplication.CreateBuilder(args);

// builder.Services.AddOpenApi();
// builder.Services.AddCors(options =>
// {
//     options.AddPolicy("AllowAngular", policy =>
//     {
//         var allowedOrigins = builder.Configuration["AllowedOrigins"] ?? "http://localhost:4200";
//         policy.WithOrigins(allowedOrigins)
//               .AllowAnyHeader()
//               .AllowAnyMethod();
//     });
// });

// var app = builder.Build();

// if (app.Environment.IsDevelopment())
// {
//     app.MapOpenApi();
// }

// app.UseCors("AllowAngular");

// // In-memory TODO list
// var todos = new List<Todo>();
// var nextId = 1;

// // Get all todos
// app.MapGet("/api/todos", () => todos);

// // Add todo with validation
// app.MapPost("/api/todos", (TodoRequest request) =>
// {
//     if (string.IsNullOrWhiteSpace(request.Title))
//         return Results.BadRequest("Title cannot be empty");

//     var todo = new Todo(nextId++, request.Title.Trim(), false);
//     todos.Add(todo);
//     return Results.Created($"/api/todos/{todo.Id}", todo);
// });

// // Delete todo
// app.MapDelete("/api/todos/{id}", (int id) =>
// {
//     var todo = todos.FirstOrDefault(t => t.Id == id);
//     if (todo is null) return Results.NotFound();
//     todos.Remove(todo);
//     return Results.NoContent();
// });

// app.Run();

using backend.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddOpenApi();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngular", policy =>
    {
        var allowedOrigins = builder.Configuration["AllowedOrigins"] ?? "http://localhost:4200";
        policy.WithOrigins(allowedOrigins)
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

builder.Services.AddControllers();
builder.Services.AddSingleton<ITodoService, TodoService>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseCors("AllowAngular");
app.MapControllers();

app.Run();