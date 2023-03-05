import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, take } from 'rxjs';
import { Coin } from 'src/app/models/coin.model';
import { CoinService } from 'src/app/services/coin.service';

@Component({
  selector: 'app-tab-search',
  templateUrl: 'search.page.html',
})
export class SearchPage implements OnInit {
  constructor(private router: Router, private coinService: CoinService) {}
  coins$!: Observable<Array<Coin>>;

  ngOnInit(): void {
    console.warn('test');
    // this.coins$ = this.coinService.values$;
  }

  goToImport(): void {
    this.router.navigate(['import']);
  }
}
