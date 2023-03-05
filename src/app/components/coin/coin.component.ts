import { Component, Input } from '@angular/core';
import * as moment from 'moment';
import { ActionSheetService } from '../../services/action-sheet.service';
import { Coin } from '../../models/coin.model';
import { CoinService } from '../../services/coin.service';
import { concatMap } from 'rxjs';

@Component({
  templateUrl: './coin.component.html',
  selector: 'app-coin',
})
export class CoinComponent {
  @Input() coin!: Coin;

  get checked(): boolean {
    return !!this.coin.foundTimestamp;
  }

  get buttonColor(): string | undefined {
    return this.checked ? 'success' : undefined;
  }

  constructor(
    private actionSheetService: ActionSheetService,
    private coinService: CoinService
  ) {}

  onFoundChange(): void {
    if (this.checked) {
      this.actionSheetService
        .show$('Do you realy want to "unfind" this coin?', [
          { text: 'Yes, mark as not found.', role: 'confirm' },
          { text: 'No, cancel.', role: 'cancel' },
        ])
        .pipe(
          concatMap(() => {
            this.coin.foundTimestamp = undefined;

            return this.coinService.update$(this.coin);
          })
        )
        .subscribe();
    } else {
      this.coin.foundTimestamp = moment().toISOString(true);

      this.coinService.update$(this.coin).subscribe();
    }
  }
}
