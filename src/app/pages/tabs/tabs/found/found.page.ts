import { Component } from '@angular/core';
import { cloneDeep } from 'lodash';
import { map, Observable } from 'rxjs';
import { Coin } from 'src/app/models/coin.model';
import { CoinService } from 'src/app/services/coin.service';

@Component({
  selector: 'app-tab-found',
  templateUrl: 'found.page.html',
  styleUrls: ['found.style.scss'],
})
export class FoundPage {
  coins$!: Observable<Array<Coin>>;

  constructor(private coinService: CoinService) {}

  ionViewWillEnter(): void {
    this.coins$ = this.coinService.values$.pipe(
      map((coins) => {
        const filteredCoins: Array<Coin> = [];

        coins.forEach((coin) => {
          if (!coin.foundTimestamp) return;

          filteredCoins.push(cloneDeep(coin));
        });

        return filteredCoins;
      })
    );
  }
}
