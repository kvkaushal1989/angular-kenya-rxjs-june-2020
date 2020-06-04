import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodosService } from 'src/app/services/todos.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css'],
})
export class StatsComponent implements OnInit {
  doneTodos: Observable<number>;
  notDoneTodos: Observable<number>;

  allTodos: Observable<number>;

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.doneTodos = this.todosService.countTodos(true);
    this.notDoneTodos = this.todosService.countTodos(false);
    this.allTodos = this.todosService.todos.pipe(map((todos) => todos.length));
  }
}
