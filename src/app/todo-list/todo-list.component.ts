import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-todo-list',
	templateUrl: './todo-list.component.html',
	styleUrls: [ './todo-list.component.css' ]
})
export class TodoListComponent implements OnInit {
	public tasks = [];

	ngOnInit() {}

	addTask(taskHTML) {
		if (taskHTML.value.length === 0) return;
		if (this.tasks.length === 0) {
			this.tasks.push({ id: 1, task: taskHTML.value });
			taskHTML.value = '';
		} else {
			const id = this.tasks[this.tasks.length - 1].id + 1;

			this.tasks.push({ id: id, task: taskHTML.value });
			taskHTML.value = '';
		}
	}

	removeTask(todo) {
		this.tasks.splice(this.tasks.indexOf(todo), 1);
	}

	editar(task, taskHTML) {
		const index = this.tasks.indexOf(task);
		console.log(taskHTML.value, index);
		this.tasks.splice(index, 1, { id: task.id, task: taskHTML.value });
	}
}
