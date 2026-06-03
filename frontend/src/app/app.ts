import { Component, OnInit, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Todo } from './todo';
import { TodoModel } from './todo.model';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  todos = signal<TodoModel[]>([]);
  titleControl = new FormControl('', [Validators.required, Validators.minLength(1)]);

  constructor(private _todoService: Todo) { }

  ngOnInit() {
    this.loadTodos();
  }

  // Load all todos from backend
  loadTodos() {
    this._todoService.getTodos().subscribe(todos => {
      this.todos.set(todos);
    });
  }

  // Add new todo and reload list
  addTodo() {
    if (this.titleControl.invalid) return;
    this._todoService.addTodo(this.titleControl.value!).subscribe(() => {
      this.titleControl.reset();
      this.loadTodos();
    });
  }

  // Delete todo by ID and reload list
  deleteTodo(id: number) {
    this._todoService.deleteTodo(id).subscribe(() => {
      this.titleControl.reset();
      this.loadTodos();
    });
  }
}
