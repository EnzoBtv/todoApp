import { CacheModule } from 'ionic-cache';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditTodoPage } from './edit-todo.page';

const routes: Routes = [
  {
    path: '',
    component: EditTodoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    CacheModule.forRoot()
  ],
  declarations: [EditTodoPage]
})
export class EditTodoPageModule {}
