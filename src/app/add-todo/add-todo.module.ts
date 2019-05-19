import { CacheModule } from 'ionic-cache';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'

import { IonicModule } from '@ionic/angular';

import { AddTodoPage } from './add-todo.page';

const routes: Routes = [
  {
    path: '',
    component: AddTodoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    CacheModule.forRoot()
  ],
  declarations: [AddTodoPage]
})
export class AddTodoPageModule {}
