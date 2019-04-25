import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.page.html',
  styleUrls: ['./add-todo.page.scss'],
})
export class AddTodoPage implements OnInit {

  constructor(private http: HttpClient, private router: Router) { 

  }

  model : any = {
    title: ''
  };

  ngOnInit() {
  }

  saveTodo = () => {
    this.model.isEnabled = false;
    this.http.post('http://localhost:3000/api/todos', this.model).subscribe(() => {
      this.router.navigate(['tab1']);
    })
  }
}
