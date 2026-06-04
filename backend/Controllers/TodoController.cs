using backend.Models;
using backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[ApiController]
[Route("api/todos")]
public class TodoController : ControllerBase
{
    private readonly ITodoService _todoService;

    public TodoController(ITodoService todoService)
    {
        _todoService = todoService;
    }

    // GET api/todos
    [HttpGet]
    public IActionResult GetAll()
    {
        return Ok(_todoService.GetAll());
    }

    // POST api/todos
    [HttpPost]
    public IActionResult Add(TodoRequest request)
    {
        if (string.IsNullOrWhiteSpace(request.Title))
            return BadRequest("Title cannot be empty");

        var todo = _todoService.Add(request);
        return CreatedAtAction(nameof(GetAll), new { id = todo.Id }, todo);
    }

    // DELETE api/todos/{id}
    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        var deleted = _todoService.Delete(id);
        if (!deleted) return NotFound();
        return NoContent();
    }
}