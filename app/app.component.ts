import { Component } from '@angular/core';

var todos = [
  {
    title: 'Изучить Angular 2',
    completed: false,
  },
  {
    title: 'Изучить TypeScript',
    completed: true,
  },
  {
    title: 'Изучить English',
    completed: true,
  }
]

@Component({
  moduleId: module.id,
  selector: 'app-component',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})

export class AppComponent{
  title = "Angular 2";
  todos = todos;

  toggle(todo: any){
    todo.completed = !todo.completed;
  }

  delete(todo: any){
    let index = this.todos.indexOf(todo);
    if (index > -1){
      this.todos.splice(index, 1);
    }   
  }
}