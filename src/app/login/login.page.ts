import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CacheService } from 'ionic-cache';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  model: any = {
    email: '',
    password: ''
  }

  constructor(private router: Router, private http: HttpClient, private cache: CacheService) { }

  ngOnInit() {
  }
  
  goToRegister() {
    this.router.navigate(['user-register']);
  }

  login() {
    this.http.get(`http://localhost:3000/api/authenticate/${this.model.email}/${this.model.password}`).subscribe((data: any) => {
      this.cache.saveItem('token', data.token);
      if(data.todos) {
        this.cache.saveItem('clientTodos', data.todos);
      }
      this.cache.saveItem('userId', data.userId);
      this.router.navigate(['tabs'])
    });
  }
}
