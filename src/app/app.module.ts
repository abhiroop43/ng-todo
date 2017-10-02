import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TodosComponent} from './todos/todos.component';
import {TodoEditComponent} from './todos/todo-edit/todo-edit.component';
import {AppRoutingModule} from './app-routing.module';
import {HeaderComponent} from './header/header.component';
import {TodosService} from './todos/todos.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RemoteService} from './shared/remote.service';
import {HttpModule} from '@angular/http';
import {SignInComponent} from './auth/sign-in/sign-in.component';
import {SignUpComponent} from './auth/sign-up/sign-up.component';
import {AuthService} from './auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoEditComponent,
    HeaderComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule,
    FormsModule
  ],
  providers: [RemoteService, TodosService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
