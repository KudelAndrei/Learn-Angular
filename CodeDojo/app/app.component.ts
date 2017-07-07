import { Component } from '@angular/core';
import { Todo } from './shared/todo';
import { todos } from './shared/data';

@Component({
  moduleId: module.id,
  selector: 'app-component',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})

export class AppComponent{
  title = "Angular 2";
  todos: Todo[] = todos;

  create(title: string){
    const todo = new Todo(this.title);
    this.todos.push(todo);
  }
}