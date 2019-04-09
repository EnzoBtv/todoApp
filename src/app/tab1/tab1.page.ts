import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-tab1',
	templateUrl: 'tab1.page.html',
	styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
	constructor(private router: Router) { }

	initialTodos: any = [
		{
			title: 'Wash the dishes',
			isEnabled: false,
		},
		{
			title: 'Walk with the dog',
			isEnabled: true,
		},
		{
			title: 'Do the homework',
			isEnabled: false,
		},
	];
	addTodo() {
		this.router.navigate(['add-todo']);
	}
}
