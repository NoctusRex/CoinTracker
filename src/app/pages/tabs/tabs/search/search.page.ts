import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cloneDeep, isEmpty, values } from 'lodash';
import { map, Observable, take } from 'rxjs';
import { Coin } from 'src/app/models/coin.model';
import { CoinService } from 'src/app/services/coin.service';

@Component({
  selector: 'app-tab-search',
  templateUrl: 'search.page.html',
  styleUrls: ['./search.style.scss'],
})
export class SearchPage implements OnInit {
  coins$!: Observable<Array<Coin>>;
  filter: string = '';

  constructor(private router: Router, private coinService: CoinService) {}

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    this.coins$ = this.coinService.values$.pipe(
      map((coins) => {
        const filteredCoins: Array<Coin> = [];

        if (isEmpty(this.filter)) return filteredCoins;

        coins.forEach((coin) => {
          let valid = true;

          if (coin.foundTimestamp) return;

          const coinString = values(coin).join(' ').toLowerCase();
          this.filter.split(' ').forEach((filterElement) => {
            if (!coinString.includes(filterElement.toLowerCase())) {
              valid = false;
              return;
            }
          });

          if (!valid) return;

          filteredCoins.push(cloneDeep(coin));
        });

        return filteredCoins;
      })
    );
  }

  goToImport(): void {
    this.router.navigate(['import']);
  }
}
