import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'add-todo', loadChildren: './add-todo/add-todo.module#AddTodoPageModule' },
  { path: 'tab1', loadChildren: './tab1/tab1.module#Tab1PageModule'},
  { path: 'edit-todo', loadChildren: './edit-todo/edit-todo.module#EditTodoPageModule' },
  { path: '', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'user-register', loadChildren: './user-register/user-register.module#UserRegisterPageModule' }



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
