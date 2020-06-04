import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { TodosService } from 'src/app/services/todos.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-topbar-search',
  templateUrl: './topbar-search.component.html',
  styleUrls: ['./topbar-search.component.css'],
})
export class TopbarSearchComponent implements OnInit {
  searchIcon = faSearch;
  searchControl = new FormControl(null, Validators.required);

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {}

  search(): void {
    if (this.searchControl.value === '') {
      this.todosService.resetSearch();
      return;
    }

    this.todosService.search(this.searchControl.value);
  }
}
