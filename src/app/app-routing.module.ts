import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TodosComponent} from './todos/todos.component';
import {TodoEditComponent} from './todos/todo-edit/todo-edit.component';

const appRoutes: Routes = [
  {path: 'list', component: TodosComponent},
  {path: 'new', component: TodoEditComponent},
  {path: 'edit/:id', component: TodoEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
