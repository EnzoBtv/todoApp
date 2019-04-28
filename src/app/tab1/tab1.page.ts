import { EditTodoPage } from './../edit-todo/edit-todo.page';
import { AddTodoPage } from './../add-todo/add-todo.page';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
	selector: 'app-tab1',
	templateUrl: 'tab1.page.html',
	styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
	initialTodos: any = [];
	
	constructor(private router: Router, private http: HttpClient, private modal: ModalController, private toastr: ToastController) { 
		this.getTodos();
	}

	ionViewDidLoad() {
		this.getTodos();
	}
	
	async addTodo() {
		const addTodo = await this.modal.create({
			component: AddTodoPage
		});
		await addTodo.present();
		addTodo.onDidDismiss().then(() => {
			this.getTodos();
		})
	}

	async getTodos() {
		await this.http.get('http://localhost:3000/api/get/todos').subscribe((data: any) => {
			this.initialTodos = [...data];
		})
	}

	async removeTodo(todo) {
		await this.http.delete(`http://localhost:3000/api/delete/todo/${todo._id}`).subscribe(async (data: any) => {
			const removeTodoToastr = await this.toastr.create({
				message: "Removed",
				duration: 2000
			});
			await removeTodoToastr.present()
			this.getTodos();
		});
	}

	async editTodo(todo){
		const editTodo = await this.modal.create({
			component: EditTodoPage,
			componentProps: {title: todo.title, id: todo._id}
		});
		await editTodo.present();
		editTodo.onDidDismiss().then(() => {
			this.getTodos()
		})
	}

	async editTodoEnabled(todo) {
		this.http.put('http://localhost:3000/api/update/todo/enabled', {todoId: todo._id, isEnabled: !todo.isEnabled}).subscribe(() => {
			this.getTodos();
		});
	}
}