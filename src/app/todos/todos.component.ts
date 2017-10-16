import {Component, OnInit} from '@angular/core';
import {TodosService} from './todos.service';
import {RemoteService} from '../shared/remote.service';
import {Response} from '@angular/http';
import {Todo} from './todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos = [];

  constructor(private todosService: TodosService, private remote: RemoteService) {
  }

  ngOnInit() {
    this.remote.getTodos()
      .subscribe(
        (todos: Todo[]) => {
          this.todosService.setAllTodos(todos);
          this.todos = todos;
          console.log(this.todos);
        }
      );
  }

}
