import {Injectable} from '@angular/core';
import {TodosService} from '../todos/todos.service';
import {Http} from '@angular/http';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class RemoteService {
  constructor(private http: Http,
              private todosService: TodosService,
              private authService: AuthService) {
  }

  setTodos() {
    const token = this.authService.getToken();
    return this.http.put('https://ng-todoapp-9c449.firebaseio.com/todos.json?auth=' + token,
      this.todosService.getTodos());
  }

  getTodos() {
    const token = this.authService.getToken();
    return this.http.get('https://ng-todoapp-9c449.firebaseio.com/todos.json?auth=' + token);
  }
}
