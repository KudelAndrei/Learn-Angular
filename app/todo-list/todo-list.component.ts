import { Component } from '@angular/core';
import { Todo } from '../shared/todo';
import { todos } from '../shared/data';

@Component({
  moduleId: module.id,
  selector: 'todo-list',
  templateUrl: 'todo-list.component.html',
})
export class TodoListComponent {
  todos: Todo[] = todos;

}