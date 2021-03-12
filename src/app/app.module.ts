import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodoNewComponent } from './todo-new/todo-new.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { TodoRemoveComponent } from './todo-remove/todo-remove.component';
import { TodoSearchComponent } from './todo-search/todo-search.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoDetailComponent,
    MessagesComponent,
    DashboardComponent,
    TodoNewComponent,
    TodoEditComponent,
    TodoRemoveComponent,
    TodoSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
