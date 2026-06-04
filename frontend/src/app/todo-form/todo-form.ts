import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-form',
  imports: [ReactiveFormsModule],
  templateUrl: './todo-form.html',
  styleUrl: './todo-form.css',
})
export class TodoForm {

  // Get today's date in YYYY-MM-DD format for min date validation
  todayDate = new Date().toISOString().split('T')[0];


  todoForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50)
    ]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(100)
    ]),
    category: new FormControl('Personal', [
      Validators.required
    ]),
    date: new FormControl('', [
      Validators.required
    ]),
    time: new FormControl('', [
      Validators.required
    ])
  });

  constructor(private _todoService: Todo) { }

  // Submit form and call service directly
  submit() {
    if (this.todoForm.invalid) return;
    const { title, description, category, date, time } = this.todoForm.value;
    this._todoService.addTodo(title!, description!, category!, date!, time!);
    this.todoForm.reset({ category: 'Personal' });
  }
}
