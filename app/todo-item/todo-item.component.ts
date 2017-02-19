import { Component, Input } from '@angular/core';
import { Todo } from '../shared/todo';

 @Component({
   moduleId: module.id,
   selector: 'todo-item',
   templateUrl: 'todo-item.component.html',
 })

 export class TodoItemComponent{
   @Input() todo: Todo;

   toggle(){
     this.todo.completed = !this.todo.completed;
   }

 }