import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TodosComponent} from './todos/todos.component';
import {TodoEditComponent} from './todos/todo-edit/todo-edit.component';
import {SignInComponent} from './auth/sign-in/sign-in.component';
import {SignUpComponent} from './auth/sign-up/sign-up.component';
import {AuthGuard} from './auth/auth-guard.service';
import {HomeComponent} from './home/home.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'list', component: TodosComponent, canActivate: [AuthGuard]},
  {path: 'new', component: TodoEditComponent, canActivate: [AuthGuard]},
  {path: 'edit/:id', component: TodoEditComponent, canActivate: [AuthGuard]},
  {path: 'login', component: SignInComponent},
  {path: 'register', component: SignUpComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
