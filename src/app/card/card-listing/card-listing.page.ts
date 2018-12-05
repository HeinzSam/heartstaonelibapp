import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../shared/card.service';
import { Card } from '../shared/card.model';
import { ToastService } from '../../shared/services/toast.service';

@Component({
  selector: 'app-card-listing',
  templateUrl: './card-listing.page.html',
  styleUrls: ['./card-listing.page.scss'],
})
export class CardListingPage {
  cardDeckGroup: string;
  cardDeck: string;

  cards: Card[] = [];

  constructor(private route: ActivatedRoute,
              private cardService: CardService,
              private toaster: ToastService) { }

    private getcards() {
      this.cardService.getCardsByDeck(this.cardDeckGroup, this.cardDeck).subscribe(
        (cards: Card[]) => {
          this.cards = cards;
        }, () => this.toaster.presentErrorToast('Upps, der Server wollte\'s nciht'));
       }



  ionViewWillEnter() {
     this.cardDeckGroup = this.route.snapshot.paramMap.get('cardDeckGroup');
     this.cardDeck = this.route.snapshot.paramMap.get('cardDeck');
     if (!this.cards || this.cards.length === 0) {
      // console.log('ladenb von Karten');
      this.getcards(); }

}
}
