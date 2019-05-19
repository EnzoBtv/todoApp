import { ToastController } from '@ionic/angular';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastrService {

  constructor(private toastr: ToastController) { }

  public async createToastr(message, duration) {
    return await this.toastr.create({
      message: message,
      duration: duration
    })
  }
}
