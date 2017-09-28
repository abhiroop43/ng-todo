import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TodosService} from '../todos.service';
import {RemoteService} from '../../shared/remote.service';
import {Response} from '@angular/http';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit, OnDestroy {
  selectedToDoId: number;
  editMode = false;
  sub: Subscription = null;
  status = '';
  todoEditForm: FormGroup;
  constructor(private route: ActivatedRoute,
              private todoService: TodosService,
              private remote: RemoteService,
              private router: Router) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(
      (params: Params) => {
        this.selectedToDoId = +params['id'];
        this.editMode = params['id'] != null;
        this.createForm();
      }
    );
  }

  createForm() {
    let taskName = '';
    let taskDescription = '';
    let taskDueDate = '';
    this.todoEditForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      dueDate: new FormControl(null, [Validators.required])
    });

    if (this.editMode) {
      const currentTodo = this.todoService.getTodo(this.selectedToDoId);
      taskName = currentTodo.name;
      taskDescription = currentTodo.description;
      taskDueDate = currentTodo.dueDate;
      this.status = (currentTodo.isComplete) ? 'Completed' : 'Pending';
      this.todoEditForm.setValue({
          name: taskName,
          description: taskDescription,
          dueDate: taskDueDate
        });

    }
  }

  onSubmit() {
    if (this.editMode) {
      this.todoService.updateTodo(this.selectedToDoId, this.todoEditForm.value);
    } else {
      this.todoService.addTodo(this.todoEditForm.value);
    }
    this.remote.setTodos().subscribe(
      (response: Response) => {
        console.log(response);
        this.onCancel();
      }
    );
  }

  onCancel() {
    this.router.navigateByUrl('/list');
  }

  markComplete() {
    this.todoService.markAsComplete(this.selectedToDoId);
    this.remote.setTodos().subscribe(
      (response: Response) => {
        console.log(response);
        this.onCancel();
      }
    );
  }

  removeTask() {
    this.todoService.deleteTodo(this.selectedToDoId);
    this.remote.setTodos().subscribe(
      (response: Response) => {
        console.log(response);
        this.onCancel();
      }
    );
  }

  ngOnDestroy(): void {
    if (this.sub !== null) {
      this.sub.unsubscribe();
    }
  }

}
