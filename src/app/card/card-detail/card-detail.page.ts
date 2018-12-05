import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../shared/card.service';
import { Card } from '../shared/card.model';
import { LoaderService } from '../../shared/services/loader.service';


@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.page.html'
  })
export class CardDetailPage {
  cardId: string;

  card: Card;

  constructor(private route: ActivatedRoute,
              private cardService: CardService,
              private loadingService: LoaderService) { }


  async ionViewWillEnter() {
    await this.loadingService.presentLoading();
    this.cardId = this.route.snapshot.paramMap.get('cardId');
    this.cardService.getCardById(this.cardId).subscribe(
      (cards: Card[]) => {
        this.card = cards[0];
      });
      this.loadingService.dismissLoading();
  }

  updateImage() {
    this.card.img = 'assets/images/DefaultCard.png';
  }



}
