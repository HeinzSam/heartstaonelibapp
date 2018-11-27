import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';

import { CardDeckPage } from './card-deck/card-deck.page';

import {CardService} from './shared/card.service';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        HttpClientModule
    ],
    providers: [
        CardService
    ],
    declarations: [
        CardDeckPage
    ]
})
export class CardPageModule {}
