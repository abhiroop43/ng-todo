import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TodosComponent} from './todos/todos.component';
import {TodoEditComponent} from './todos/todo-edit/todo-edit.component';
import {AppRoutingModule} from './app-routing.module';
import {HeaderComponent} from './header/header.component';
import {TodosService} from './todos/todos.service';
import {ReactiveFormsModule} from '@angular/forms';
import {RemoteService} from './shared/remote.service';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoEditComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [RemoteService, TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
