import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Todo } from '../todo'

import { TodoService } from '../todo.service'

@Component({
  selector: 'app-todo-search',
  templateUrl: './todo-search.component.html',
  styleUrls: ['./todo-search.component.css']
})
export class TodoSearchComponent implements OnInit {
  todos: Todo[]
  status: string

  constructor(private route: ActivatedRoute,
    private todoService: TodoService,
    private location: Location) { }

  ngOnInit() {
    this.load()
  }

  load(): void {
    this.status = this.route.snapshot.paramMap.get('status');
    this.todoService.todoSearch(this.status)
      .subscribe(todos => this.todos = todos);
  }

  goBack(): void {
    this.location.back();
  }
}
