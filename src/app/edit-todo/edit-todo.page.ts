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

  constructor(private modal: ModalController, private toastr: ToastController, private http: HttpClient) {}

  ngOnInit() {
  }

  dismissModal(){
    this.modal.dismiss()
  }

  saveEditTodo(){
    this.http.put('http://localhost:3000/api/update/todo/title', {todo: this.title, todoId: this.id}).subscribe(async () => {
      const editTodoToastr = await this.toastr.create({
        message: 'Edited',
        duration: 2000
      });
      await editTodoToastr.present();
      this.dismissModal()
    });
  }
}
