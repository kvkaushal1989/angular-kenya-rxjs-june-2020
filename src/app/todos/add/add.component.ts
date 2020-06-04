import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  todoControl = new FormControl(null, Validators.required);

  constructor(private todosService: TodosService) {}

  ngOnInit() {}

  onAdd() {
    if (!this.todoControl.valid) {
      return;
    }

    this.todosService.addTodo({
      todo: this.todoControl.value,
      isDone: false,
    });

    this.todoControl.reset();
  }
}
