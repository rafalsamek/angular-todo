import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Todo } from './todo'
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const defaultTodo = {id: -1, title: 'None', dueDate: "1970-01-01"}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private baseUrl = '/api';

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.baseUrl + "/todos").pipe(
      catchError(this.handleError<Todo[]>('getTodos', []))
    );
  }

  todoCount(status: string): Observable<number> {
    return this.http.get<number>(this.baseUrl + "/todos/count/" + status).pipe(
      catchError(this.handleError<number>('todoCount', 0))
    );
  }

  todoSearch(status: string): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.baseUrl + "/todos/search/" + status).pipe(
      catchError(this.handleError<Todo[]>('todoSearch', []))
    );
  }

  getUpcommingTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.baseUrl + "/todos/upcoming").pipe(
      catchError(this.handleError<Todo[]>('getUpcomingTodos', []))
    );
  }

  getTodo(id: number): Observable<Todo> {
    return this.http.get<Todo>(this.baseUrl + "/todo/" + id).pipe(
      catchError(this.handleError<Todo>('getTodo', defaultTodo as Todo))
    );
  }

  removeTodo(id: number): Observable<Todo> {
    return this.http.delete<Todo>(this.baseUrl + "/todo/" + id).pipe(
      catchError(this.handleError<Todo>('removeTodo', defaultTodo as Todo))
    );
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.baseUrl + "/todo", todo, httpOptions).pipe(
      catchError(this.handleError<Todo>('addTodo', defaultTodo as Todo))
    );
  }

  updateTodo(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(this.baseUrl + "/todo", todo, httpOptions).pipe(
      catchError(this.handleError<Todo>('updateTodo', defaultTodo as Todo))
    );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  /** Log a TodoService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`TodoService: ${message}`);
  }
}
