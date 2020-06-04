import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShellComponent } from './todos/shell/shell.component';
import { TodosListComponent } from './todos/todos-list/todos-list.component';
import { TodoItemComponent } from './todos/todo-item/todo-item.component';
import { TopbarComponent } from './todos/topbar/topbar.component';
import { TopbarSearchComponent } from './todos/topbar-search/topbar-search.component';
import { AddComponent } from './todos/add/add.component';
import { StatsComponent } from './todos/stats/stats.component';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    TodosListComponent,
    TodoItemComponent,
    TopbarComponent,
    TopbarSearchComponent,
    AddComponent,
    StatsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
