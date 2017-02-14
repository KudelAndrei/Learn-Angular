import { Component } from '@angular/core';


interface ITodo { title: string; completed: boolean; }

var todos: ITodo[] = [
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
  todos: ITodo[] = todos;

  toggle(todo: ITodo){
    todo.completed = !todo.completed;
  }

  delete(todo: ITodo){
    let index = this.todos.indexOf(todo);
    if (index > -1){
      this.todos.splice(index, 1);
    }   
  }
}