import { HttpServiceService } from './../http-service.service';
import { CacheService } from 'ionic-cache';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from '../toastr.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.page.html',
  styleUrls: ['./add-todo.page.scss'],
})
export class AddTodoPage implements OnInit {

  constructor(private http: HttpServiceService, private router: Router, private modal: ModalController, private toastr: ToastrService, private cache: CacheService) { 

  }

  model : any = {
    title: ''
  };

  ngOnInit() {
  }

  saveTodo = async () => {
    await this.cache.getItem('userId').then((user: any) => {
      this.model.userId = user;
    });
    this.model.isEnabled = false;
    let createPost = await this.http.post('/add/todo', this.model);
    createPost.subscribe(async () => {
      const addTodoToastr = await this.toastr.createToastr('Added todo', 5000);
			await addTodoToastr.present();
      this.modal.dismiss();
    }, async (err: any) => {
      const errorToastr = await this.toastr.createToastr(err.error.title, 5000);
			await errorToastr.present();
    })
  }

  dismissModal(){
    this.modal.dismiss();
  }
}
