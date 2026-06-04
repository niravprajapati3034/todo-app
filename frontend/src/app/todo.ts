import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { TodoModel } from './todo.model';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Todo {
  private apiUrl = environment.apiUrl;

  // Shared todos signal - banne components use karse
  todos = signal<TodoModel[]>([]);

  constructor(private http: HttpClient) {
    this.loadTodos();
  }

  // Load all todos from backend
  loadTodos() {
    this.http.get<TodoModel[]>(this.apiUrl).subscribe({
      next: (todos) => this.todos.set(todos),
      error: (err) => console.error('Failed to load todos', err)
    });
  }

  // Add new todo
  addTodo(title: string) {
    this.http.post<TodoModel>(this.apiUrl, { title }).subscribe(() => {
      this.loadTodos();
    });
  }

  // Delete todo by ID
  deleteTodo(id: number) {
    this.http.delete<void>(`${this.apiUrl}/${id}`).subscribe(() => {
      this.loadTodos();
    });
  }
}
