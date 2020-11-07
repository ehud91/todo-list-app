import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/todo';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todosUrl:String = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit = '?_limit=5';

  constructor(private http:HttpClient) { }

  // Get Todods
  deleteTodos(todo:Todo):Observable<Todo> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete<Todo>(url, httpOptions);
  }

  // Get Todos
  getTodos(): Observable<Todo[]> {
    /*
    return [{
      id: 1,
      title: 'Todo One',
      completed: true
    },
    {
      id: 2,
      title: 'Todo Two',
      completed: true
    },
    {
      id: 3,
      title: 'Todo Three',
      completed: false
    }]
    */
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }  

  deleteTodo(todo:Todo): Observable<Todo> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete<Todo>(url, httpOptions);
  }

  // Add Todo
  addTodo(todo:Todo):Observable<Todo> {
    const url = `${this.todosUrl}`;
    return this.http.post<Todo>(url, todo, httpOptions);
  }

  // Toggle Completed
  toggleCompleted(todo: Todo): Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }


}
