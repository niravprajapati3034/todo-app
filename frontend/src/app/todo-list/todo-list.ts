import { Component } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList {


  constructor(private _todoService: Todo) { }

  // Get todos from service
  get todos() {
    return this._todoService.todos;
  }

  // Delete todo by ID
  deleteTodo(id: number) {
    this._todoService.deleteTodo(id);
  }
}
