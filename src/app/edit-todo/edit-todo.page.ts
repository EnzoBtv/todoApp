import { CacheService } from 'ionic-cache';
import { HttpClient } from '@angular/common/http';
import { ModalController, ToastController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.page.html',
  styleUrls: ['./edit-todo.page.scss'],
})
export class EditTodoPage implements OnInit {
  
  @Input() title: String
  @Input() id: String

  constructor(private modal: ModalController, private toastr: ToastController, private http: HttpClient, private cache: CacheService) {}

  ngOnInit() {
  }

  dismissModal(){
    this.modal.dismiss()
  }

  async saveEditTodo(){
    let userId = undefined;
    await this.cache.getItem('userId').then((user: any) => {
      userId = user;
    })
    this.http.put('http://localhost:3000/api/update/todo/title', {todo: this.title, todoId: this.id, userId: userId}).subscribe(async () => {
      const editTodoToastr = await this.toastr.create({
        message: 'Edited',
        duration: 2000
      });
      await editTodoToastr.present();
      this.dismissModal()
    });
  }
}
