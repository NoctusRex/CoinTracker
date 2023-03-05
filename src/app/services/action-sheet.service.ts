import { Injectable } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Observable, from, EMPTY, of } from 'rxjs';
import { concatMap, filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ActionSheetService {
  constructor(private actionSheetController: ActionSheetController) {}

  show$(
    header: string,
    buttons: Array<{ text: string; role: string }>
  ): Observable<string> {
    return from(this.actionSheetController.create({ header, buttons })).pipe(
      concatMap((actionSheet) =>
        from(actionSheet.present()).pipe(
          concatMap(() => actionSheet.onWillDismiss())
        )
      ),
      filter(
        (result) => result.role !== 'cancel' && result.role !== 'backdrop'
      ),
      map((result) => result.role ?? '')
    );
  }
}
