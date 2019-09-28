import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public todo = "";
  public tasks = []

  ngOnInit() {
  }

  addTask() {
    this.tasks.push(this.todo);
  }

  removeTask(todo) {
    this.tasks.splice(this.tasks.indexOf(todo), 1);
  }

}
