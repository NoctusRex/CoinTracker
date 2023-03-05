import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CoinService } from '../../services/coin.service';

@Component({
  selector: 'app-import',
  templateUrl: 'import.page.html',
})
export class ImportPage {
  constructor(private router: Router, private importService: CoinService) {}

  restore(file: File): void {
    this.importService.import$(file).subscribe();
  }

  goBack(): void {
    this.router.navigate(['search']);
  }
}
