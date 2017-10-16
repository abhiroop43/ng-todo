import {Injectable} from '@angular/core';
import {TodosService} from '../todos/todos.service';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {AuthService} from '../auth/auth.service';
import {Todo} from '../todos/todo.model';

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
    const currentUser = this.authService.getCurrentUserName();
    return this.http.get('https://ng-todoapp-9c449.firebaseio.com/todos.json?auth=' + token)
      .map(
      (response: Response) => {
        const data = response.json();
        const filteredData = data.filter((todo: Todo) => todo.createdBy === currentUser);
        return filteredData;
      }
    );
  }
}
