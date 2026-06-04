import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { Todo } from './todo';
import { provideHttpClient } from '@angular/common/http';
import { signal } from '@angular/core';
import { vi } from 'vitest';

describe('App', () => {
  let mockTodoService: any;

  beforeEach(async () => {
    mockTodoService = {
      todos: signal([]),
      loadTodos: vi.fn(),
      addTodo: vi.fn(),
      deleteTodo: vi.fn()
    };

    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        provideHttpClient(),
        { provide: Todo, useValue: mockTodoService }
      ]
    }).compileComponents();
  });

  // Test 1 - Verify component initializes successfully
  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});