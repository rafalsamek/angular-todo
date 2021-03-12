import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  todos: Todo[]

  newTodos: number
  inProgressTodos: number
  completedTodos: number

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.load()
  }

  load(): void {
    this.todoService.getUpcommingTodos().subscribe(todos => this.todos = todos)
    this.todoService.todoCount("NEW").subscribe(count => this.newTodos = count)
    this.todoService.todoCount("IN_PROGRESS").subscribe(count => this.inProgressTodos = count)
    this.todoService.todoCount("COMPLETED").subscribe(count => this.completedTodos = count)
  }
}
