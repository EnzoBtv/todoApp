import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.page.html',
  styleUrls: ['./add-todo.page.scss'],
})
export class AddTodoPage implements OnInit {

  constructor(private http: HttpClient, private router: Router, private modal: ModalController, private toastr: ToastController) { 

  }

  model : any = {
    title: ''
  };

  ngOnInit() {
  }

  saveTodo = () => {
    this.model.isEnabled = false;
    this.http.post('http://localhost:3000/api/todos', this.model).subscribe(async () => {
      const toast = await this.toastr.create({
        duration: 2000,
        message: 'todo saved'
      })
      await toast.present()
      this.dismissModal();
    })
  }

  dismissModal(){
    this.modal.dismiss({})
  }
}
