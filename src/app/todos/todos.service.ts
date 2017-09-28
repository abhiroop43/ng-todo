import {Injectable} from '@angular/core';
import {Todo} from './todo.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class TodosService {
  todosChanged = new Subject<Todo[]>();

  private todos: Todo[] = [];
  getTodos(): Todo[] {
    return this.todos.slice();
  }

  getTodo(id: number): Todo {
    return this.todos.slice()[id];
  }

  addTodo(newTodo: Todo) {
    this.todos.push(newTodo);
    this.todosChanged.next(this.todos.slice());
  }

  updateTodo(id: number, newTodo: Todo) {
    this.todos[id] = newTodo;
    this.todosChanged.next(this.todos.slice());
  }

  setAllTodos(todos: Todo[]) {
    this.todos = todos;
  }

  deleteTodo(id: number) {
    this.todos.splice(id, 1);
    this.todosChanged.next(this.todos.slice());
  }

  markAsComplete(id: number) {
    this.todos[id].isComplete = true;
    this.todosChanged.next(this.todos.slice());
  }
}
