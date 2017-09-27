import {Injectable} from '@angular/core';
import {Todo} from './todo.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class TodosService {
  todosChanged = new Subject<Todo[]>();
  private todos: Todo[] = [
    new Todo(
      'Get Milk',
      'Buy Milk from store',
      '22/01/2017'
    ),
    new Todo(
      'Deliver Products',
      'Deliver products to customer',
      '24/03/2017'
    ),
    new Todo(
      'Attend Lunch',
      'Attend Lunch with Vendors',
      '18/02/2017'
    )
  ];
  getTodos(): Todo[] {
    return this.todos.slice();
  }

  getTodo(id: number): Todo {
    return this.todos[id];
  }

  addTodo(newTodo: Todo) {
    this.todos.push(newTodo);
    this.todosChanged.next(this.todos.slice());
  }

  updateTodo(id: number, newTodo: Todo) {
    this.todos[id] = newTodo;
    this.todosChanged.next(this.todos.slice());
  }

  deleteTodo(id: number) {
    this.todos.splice(id, 1);
    this.todosChanged.next(this.todos.slice());
  }
}
