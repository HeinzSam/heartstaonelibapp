import { Injectable } from '@angular/core';
import { of as ObservableOf, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CardDeck, Card } from './card.model';



@Injectable()
export class CardService {
    private readonly HS_API_URL = 'https://omgvamp-hearthstone-v1.p.mashape.com';
    private readonly API_KEY = '9vW5JqP4jKmshaNFjRnwPLpSWJxrp1eGNRNjsnFM5vhWmvW7HT';
    private headers: HttpHeaders;

    constructor( private http: HttpClient) {
        this.headers = new HttpHeaders({'X-Mashape-Key': this.API_KEY});
    }
    public getAllCardDecks(): Observable<CardDeck[]> {
        return this.http.get<CardDeck[]>(`${this.HS_API_URL}/info`, {headers: this.headers});
    }
    public getCardsByDeck(cardDeckGroup: string, cardDeck: string): Observable<any> {
        return this.http.get<Card[]>(`${this.HS_API_URL}/cards/${cardDeckGroup}/${cardDeck}`, {headers: this.headers});
    }
    public getCardById(cardId: string): Observable<any> {
        return this.http.get<Card[]>(`${this.HS_API_URL}/cards/${cardId}`, {headers: this.headers});
    }

}
