import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { Todo } from './todo';
import { of } from 'rxjs';
import { provideHttpClient } from '@angular/common/http';
import { vi } from 'vitest';

describe('App', () => {
  let mockTodoService: any;

  beforeEach(async () => {
    mockTodoService = {
      getTodos: vi.fn().mockReturnValue(of([])),
      addTodo: vi.fn().mockReturnValue(of({ id: 1, title: 'Test', isCompleted: false })),
      deleteTodo: vi.fn().mockReturnValue(of(void 0))
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

  // Test 2 - Should not call addTodo service when input is empty
  it('should not add todo if title is empty', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    app.titleControl.setValue('');
    app.addTodo();
    expect(mockTodoService.addTodo).not.toHaveBeenCalled();
  });

  // Test 3 - Should call deleteTodo service with correct ID
  it('should call deleteTodo when deleteTodo is called', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    app.deleteTodo(1);
    expect(mockTodoService.deleteTodo).toHaveBeenCalledWith(1);
  });
});