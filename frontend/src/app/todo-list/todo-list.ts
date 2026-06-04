import { Component } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList {
  constructor(private _todoService: Todo) {}

  // Get todos from service
  get todos() {
    return this._todoService.todos;
  }

  // Delete todo by ID
  deleteTodo(id: number) {
    this._todoService.deleteTodo(id).subscribe(() => {
      this._todoService.loadTodos();
    });
  }

  // Format time to 12 hour format
  formatTime(time: string): string {
    if (!time) return '';
    const [hours, minutes] = time.split(':');
    const h = parseInt(hours);
    const ampm = h >= 12 ? 'PM' : 'AM';
    const hour12 = h % 12 || 12;
    return `${hour12}:${minutes} ${ampm}`;
  }
}
