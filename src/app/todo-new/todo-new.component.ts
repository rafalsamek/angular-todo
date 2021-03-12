import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { Todo } from '../todo'

import { TodoService } from '../todo.service'

@Component({
  selector: 'app-todo-new',
  templateUrl: './todo-new.component.html',
  styleUrls: ['./todo-new.component.css']
})
export class TodoNewComponent implements OnInit {

  title: string
  dueDate: string

  constructor(private location: Location
    , private todoService: TodoService,
    private router: Router) { }

  ngOnInit() {
  }

  save(): void {
    this.todoService.addTodo({title: this.title, dueDate: this.dueDate} as Todo)
      .subscribe(todo => this.router.navigate(['/detail/' + todo.id]))
  }

  goBack(): void {
    this.location.back();
  }

}
