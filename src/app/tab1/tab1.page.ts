import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-tab1',
	templateUrl: 'tab1.page.html',
	styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
	initialTodos: any = [];
	
	constructor(private router: Router, private http: HttpClient) { 
		this.getTodos();
	}

	ionViewDidLoad() {
		this.getTodos();
	}
	
	addTodo() {
		this.router.navigate(['add-todo']);
	}

	async getTodos() {
		await this.http.get('http://localhost:3000/api/get/todos').subscribe((data: any) => {
			this.initialTodos = [...data.docs];
		})
	}
}
