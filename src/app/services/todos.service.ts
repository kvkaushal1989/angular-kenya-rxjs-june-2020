import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  _todos: Todo[] = [
    { isDone: true, todo: 'buy milk' },
    { isDone: false, todo: 'buy groceries' },
    { isDone: false, todo: 'buy bread' },
    { isDone: true, todo: 'go to school' },
    { isDone: true, todo: 'do homework' },
    { isDone: false, todo: 'present an angular talk' },
    { isDone: false, todo: 'write an article' },
    { isDone: false, todo: 'watch movies' },
    { isDone: false, todo: 'hangout with friends' },
    { isDone: true, todo: 'Prepare dinner' },
    { isDone: false, todo: 'more todos here' },
  ];
  todosDataStream: BehaviorSubject<Todo[]>;
  constructor() {
    this.todosDataStream = new BehaviorSubject(this._todos);
  }

  get todos() {
    return this.todosDataStream;
  }

  addTodo(newTodo: Todo) {
    // avoid duplicate todos
    const isExists = this._todos.find((todo) => todo.todo === newTodo.todo);
    if (isExists) {
      return;
    }

    this._todos = this._todos.concat(newTodo);
    this.todosDataStream.next(this._todos);
  }

  countTodos(isDone = true) {
    return this.todosDataStream.pipe(
      map((todos) => todos.filter((todo) => todo.isDone === isDone).length)
    );
  }

  search(searchTerm: string) {
    const x = this._todos.filter((todo) => todo.todo.includes(searchTerm));
    this.todosDataStream.next(x);
  }

  resetSearch() {
    this.todosDataStream.next(this._todos);
  }

  toggleTodoStatus(todo: Todo) {
    this._todos = this._todos.map((t) => {
      if (todo.todo === t.todo) {
        return {
          ...t,
          isDone: !t.isDone,
        };
      }
      return t;
    });
    this.todosDataStream.next(this._todos);
  }
}

export interface Todo {
  todo: string;
  isDone: boolean;
}
