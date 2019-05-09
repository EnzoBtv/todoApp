import { ModalController, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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
    this.http.post('http://localhost:3000/api/todos', this.model).subscribe(async (data: any) => {
      const addTodoToastr = await this.toastr.create({
				message: "Added",
				duration: 2000
			});
			await addTodoToastr.present();
      this.modal.dismiss();
    }, async (err: any) => {
      const errorToastr = await this.toastr.create({
				message: err.error.title,
				duration: 5000
			});
			await errorToastr.present();
    })
  }

  dismissModal(){
    this.modal.dismiss();
  }
}
