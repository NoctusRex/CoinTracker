import { Injectable } from '@angular/core';
import { first, isEmpty, trimEnd } from 'lodash';
import {
  BehaviorSubject,
  catchError,
  concatMap,
  EMPTY,
  from,
  map,
  Observable,
  of,
  take,
  tap,
} from 'rxjs';
import { Coin } from '../models/coin.model';
import { mapToVoid } from '../utils/utils';
import { StorageService } from './storage.service';
import { ToastService } from './toast.service';

@Injectable({ providedIn: 'root' })
export class CoinService {
  private _values$ = new BehaviorSubject<Array<Coin>>([]);

  constructor(
    private storageService: StorageService,
    private toastService: ToastService
  ) {}

  get values$(): Observable<Array<Coin>> {
    return (
      isEmpty(this._values$.value)
        ? this.refresh$()
        : of(null).pipe(mapToVoid())
    ).pipe(concatMap(() => this._values$.asObservable()));
  }

  refresh$(): Observable<void> {
    console.debug('Coin Service: refresh');

    const coins = this.storageService.getItem<Array<Coin>>('coins', [], true);
    this._values$.next(coins);

    return of(null).pipe(mapToVoid());
  }

  import$(file: File): Observable<void> {
    if (file.type !== 'text/plain') {
      this.toastService.show('Invalid file type (text/plain)', {
        color: 'danger',
      });

      return EMPTY;
    }

    return from(file.text()).pipe(
      map((text) => {
        const coins: Array<Coin> = [];
        const lines = text.split(/\r?\n|\r|\n/g);
        let country = '';

        lines.forEach((line) => {
          if (isEmpty(line)) return;

          if (line.split(' ').length === 2) {
            country = line.split(' ')[0];
            return;
          }

          if (line.split(':').length === 2) {
            const split = line.split(':');
            const value = split[0];
            const years = split[1].split(
              /,(?=(?:[^\"]*\"[^\"]*\")*(?![^\"]*\"))/
            );

            years.forEach((yearToParse) => {
              let year = yearToParse;
              let memorialText = '';
              let embossingPlace = '';

              if (yearToParse.includes('"')) {
                const yearSplit = trimEnd(yearToParse.trim(), '"').split('"');

                if (yearSplit.length === 2) {
                  if (yearSplit[0].includes(' ')) {
                    const yearAndEmbossingPlaceSplit = yearSplit[0].split(' ');

                    memorialText = yearSplit[1];

                    embossingPlace = yearAndEmbossingPlaceSplit[1];
                    year = yearAndEmbossingPlaceSplit[0];
                  } else {
                    memorialText = yearSplit[1];
                    year = yearSplit[0];
                  }
                }
              } else {
                const yearSplit = yearToParse.trim().split(' ');
                embossingPlace = yearSplit[1];
                year = yearSplit[0];
              }

              coins.push({
                value,
                year: year,
                country,
                id: coins.length.toString(),
                memorialText,
                embossingPlace: embossingPlace ?? '',
              });
            });
          }
        });

        return coins;
      }),
      catchError((error) => {
        this.toastService.show(`An error occured: ${error}`, {
          color: 'danger',
        });

        return EMPTY;
      }),
      concatMap((coins) => this.set$(coins)),
      tap(() =>
        this.toastService.show('Import completed', { color: 'success' })
      ),
      mapToVoid()
    );
  }

  set(coins: Array<Coin>): void {
    console.debug('Coin Service: set', coins);

    this.storageService.setItem('coins', coins);
  }

  set$(coins: Array<Coin>): Observable<void> {
    return of(this.set(coins));
  }

  update$(coin: Coin): Observable<void> {
    console.debug('Coin Service: update', coin);

    return this._values$.pipe(
      take(1),
      map((coins) => {
        const existingCoin = first(coins.filter((x) => x.id === coin.id));

        if (!existingCoin) {
          console.debug('Coin Service: Update failed. Coin not found.', coin);
          return;
        }

        Object.assign(existingCoin, coin);

        return this.set(coins);
      }),
      concatMap(() => this.refresh$())
    );
  }
}
