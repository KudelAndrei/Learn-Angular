import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFormComponent } from './todo-form/todo-form.component' 
 
@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, TodoListComponent, TodoFormComponent],
  bootstrap: [AppComponent],
})
export class AppModule {

}