import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.page.html',
  styleUrls: ['./user-register.page.scss'],
})
export class UserRegisterPage implements OnInit {
  model: any = {
    email: '',
    name: '',
    password: '',
    registered: undefined
  }

  constructor(private router: Router, private http: HttpClient, private toastr: ToastController) {}

  ngOnInit() {
  }

  async registerUser() {
    if(!this.model.email || !this.model.name || !this.model.password) {
      let errToastr = await this.toastr.create({
        message: 'Please fill all the fields',
        duration: 5000
      });
      errToastr.present();
      return;
    }
    if(this.model.email.replace('@', '') === this.model.email || !this.model.email.split('@')[1]) {
      let errToastr = await this.toastr.create({
        message: 'Please put a valid email',
        duration: 5000
      });
      errToastr.present();
      return;
    }
    this.model.registered = new Date();
    this.http.post('http://localhost:3000/api/create/user', this.model).subscribe(async (data: any) => {
      let saveToastr = await this.toastr.create({
        message: 'Created new user Successfully',
        duration: 5000
      });
      saveToastr.present();
      this.router.navigate(['']);
    }, async (err: any) => {
      let errToastr2 = await this.toastr.create({
        message: err.title,
        duration: 5000
      });
      errToastr2.present();
    });
    
  }
}
