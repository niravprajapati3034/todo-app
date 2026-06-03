import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoModel } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class Todo {

  private apiUrl = 'http://localhost:5057/api/todos';

  constructor(private http: HttpClient) { }

  getTodos(): Observable<TodoModel[]> {
    return this.http.get<TodoModel[]>(this.apiUrl);
  }

  addTodo(title: string): Observable<TodoModel> {
    return this.http.post<TodoModel>(this.apiUrl, { title });
  }

  deleteTodo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
