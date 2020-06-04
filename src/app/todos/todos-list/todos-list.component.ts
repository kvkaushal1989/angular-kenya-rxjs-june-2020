import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo, TodosService } from 'src/app/services/todos.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css'],
})
export class TodosListComponent implements OnInit {
  todos$: Observable<Todo[]> = null;

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.todos$ = this.todosService.todos.pipe(
      tap((todos) => console.log(todos))
    );
  }
}
