import { AddTodoPage } from './../add-todo/add-todo.page';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';

@Component({
	selector: 'app-tab1',
	templateUrl: 'tab1.page.html',
	styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
	initialTodos: any = [];
	
	constructor(private router: Router, private http: HttpClient, private modal: ModalController) { 
		this.getTodos();
	}

	ionViewDidLoad() {
		this.getTodos();
	}
	
	async addTodo() {
		const modal = await this.modal.create({
			component: AddTodoPage
		});
		await modal.present();
		modal.onDidDismiss().then(() => {
			this.getTodos();
		})
	}

	async getTodos() {
		await this.http.get('http://localhost:3000/api/get/todos').subscribe((data: any) => {
			this.initialTodos = [...data.docs];
		})
	}
}
