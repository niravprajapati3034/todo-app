import { Component } from '@angular/core';
import { TodoList } from './todo-list/todo-list';
import { TodoForm } from './todo-form/todo-form';

@Component({
  selector: 'app-root',
  imports: [TodoList, TodoForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App { }
