import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Todo } from '../todo'

import { TodoService } from '../todo.service'

@Component({
  selector: 'app-todo-remove',
  templateUrl: './todo-remove.component.html',
  styleUrls: ['./todo-remove.component.css']
})
export class TodoRemoveComponent implements OnInit {
  constructor(private route: ActivatedRoute,
    private todoService: TodoService,
    private location: Location, private router: Router) { }

  ngOnInit() {
    this.removeTodo()
  }

  removeTodo(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.todoService.removeTodo(id)
      .subscribe(todo => this.router.navigate(['/todos']));
  }

}
