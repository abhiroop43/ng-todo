import {Injectable} from '@angular/core';
import {TodosService} from '../todos/todos.service';
import {Http} from '@angular/http';

@Injectable()
export class RemoteService {
  constructor(private http: Http,
              private todosService: TodosService) {
  }

  setTodos() {
    return this.http.put('https://ng-todoapp-9c449.firebaseio.com/todos.json', this.todosService.getTodos());
  }

  getTodos() {
    return this.http.get('https://ng-todoapp-9c449.firebaseio.com/todos.json');
  }
}
