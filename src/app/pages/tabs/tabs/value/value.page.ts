import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dictionary, groupBy, keys } from 'lodash';
import { map } from 'rxjs';
import { Coin } from 'src/app/models/coin.model';
import { CoinService } from 'src/app/services/coin.service';

@Component({
  selector: 'app-tab-value',
  templateUrl: 'value.page.html',
})
export class ValuePage implements OnInit {
  coins!: Dictionary<Array<Coin>>;
  keys: Array<string> = [];

  constructor(private coinService: CoinService, private router: Router) {}

  ngOnInit(): void {
    this.coinService.values$
      .pipe(map((coins) => groupBy(coins, (x) => x.value)))
      .subscribe((group) => {
        this.coins = group;
        this.keys = keys(group);
      });
  }

  goToSearch(key: string) {
    this.router.navigate(['search'], { queryParams: { filter: key } });
  }
}
