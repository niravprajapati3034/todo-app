import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoModel } from './todo.model';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Todo {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // Get all todos from API
  getTodos(): Observable<TodoModel[]> {
    return this.http.get<TodoModel[]>(this.apiUrl);
  }

  // Add new todo via API
  addTodo(title: string): Observable<TodoModel> {
    return this.http.post<TodoModel>(this.apiUrl, { title });
  }

  // Delete todo by ID via API
  deleteTodo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
