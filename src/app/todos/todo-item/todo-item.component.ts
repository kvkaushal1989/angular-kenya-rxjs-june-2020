import { Component, OnInit, Input } from '@angular/core';
import { Todo, TodosService } from 'src/app/services/todos.service';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input()
  todo: Todo;

  checkedIcon = faCheckSquare;
  nonCheckedIcon = faSquare;

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {}

  toggleTodoStatus(todo: Todo) {
    this.todosService.toggleTodoStatus(todo);
  }
}
