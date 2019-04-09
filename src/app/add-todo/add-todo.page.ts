import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.page.html',
  styleUrls: ['./add-todo.page.scss'],
})
export class AddTodoPage implements OnInit {

  constructor() { 

  }

  model : any = {
    todoItem: ''
  };

  ngOnInit() {
  }

  saveTodo = () => {
    console.log(this.model.todoItem)
  }
}
