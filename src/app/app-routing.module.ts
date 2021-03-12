import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodosComponent } from './todos/todos.component'
import { TodoDetailComponent } from './todo-detail/todo-detail.component'
import { TodoEditComponent } from './todo-edit/todo-edit.component'
import { TodoRemoveComponent } from './todo-remove/todo-remove.component'
import { TodoSearchComponent } from './todo-search/todo-search.component'
import { TodoNewComponent } from './todo-new/todo-new.component'
import { DashboardComponent }   from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path : 'todos', component : TodosComponent},
  { path : 'dashboard', component : DashboardComponent},
  { path : 'detail/:id', component : TodoDetailComponent},
  { path : 'edit/:id', component : TodoEditComponent},
  { path : 'new', component : TodoNewComponent},
  { path : 'remove/:id', component : TodoRemoveComponent},
  { path : 'search/:status', component : TodoSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
