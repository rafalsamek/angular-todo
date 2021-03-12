import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Todo } from '../todo'

import { TodoService } from '../todo.service'

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {

  todo: Todo

  constructor(private route: ActivatedRoute,
    private todoService: TodoService,
    private location: Location,
    private router: Router) { }

  ngOnInit() {
    this.getTodo()
  }

  getTodo(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.todoService.getTodo(id)
      .subscribe(todo => this.todo = todo);
  }

  save(): void {
    this.todoService.updateTodo(this.todo)
      .subscribe(todo => this.router.navigate(['/detail/' + todo.id]))  }

  goBack(): void {
    this.location.back();
  }

}
