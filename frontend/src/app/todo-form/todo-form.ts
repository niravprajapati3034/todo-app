import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-form',
  imports: [ReactiveFormsModule],
  templateUrl: './todo-form.html',
  styleUrl: './todo-form.css',
})
export class TodoForm {
  titleControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(100)
  ]);

  constructor(private _todoService: Todo) { }

  // Submit form and call service directly
  submit() {
    if (this.titleControl.invalid) return;
    this._todoService.addTodo(this.titleControl.value!);
    this.titleControl.reset();
  }
}
