import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable()
export class LoaderService {
    private loader: HTMLIonLoadingElement;

    constructor (private loadingCtrl: LoadingController) {}

    public async presentLoading(): Promise<HTMLIonLoadingElement> {
        this.loader = await this.loadingCtrl.create({
            // await ist nötig, damit die folge funktion "present()"
            // auch auf etwas zu greifen kann, sonst greift sie in Leere,
            // es wird erst weiter gerarbeitet, Loader erstellt wurde
            content: 'Ich sauge...',
              translucent: true
            });
            await this.loader.present();
            return this.loader;
    }

    public  async dismissLoading() {
        if (this.loader) {
            this.loader.dismiss();
        }
    }
}
