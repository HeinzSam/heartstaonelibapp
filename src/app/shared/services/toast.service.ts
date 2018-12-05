import { Injectable} from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable()

export class ToastService {

  constructor(public toastController: ToastController) {}

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 2000
    });
    toast.present();
  }

  async presentErrorToast( text: string ) {
    const toast = await this.toastController.create({
      message: text,
      showCloseButton: true,
      position: 'top',
      duration: 2000,
      cssClass: 'toast-error'
    });
    toast.present();
  }

}
