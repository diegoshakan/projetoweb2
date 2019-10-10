import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public todo = "";
  task = null;
  public tasks = [];

  ngOnInit() {
  }

  addTask() {
    this.tasks.push(this.todo);
  }

  removeTask(todo) {
    this.tasks.splice(this.tasks.indexOf(todo), 1);
  }

  editTask(t) {
    this.task = t;
  }

  editar() {
    const index = this.tasks.indexOf(this.task);
    this.tasks.splice(index, 1, this.task);
    this.task = null;

  }
}
