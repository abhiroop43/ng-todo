import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TodosComponent} from './todos/todos.component';
import {TodoEditComponent} from './todos/todo-edit/todo-edit.component';
import {SignInComponent} from './auth/sign-in/sign-in.component';
import {SignUpComponent} from './auth/sign-up/sign-up.component';

const appRoutes: Routes = [
  {path: 'list', component: TodosComponent},
  {path: 'new', component: TodoEditComponent},
  {path: 'edit/:id', component: TodoEditComponent},
  {path: 'login', component: SignInComponent},
  {path: 'register', component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
