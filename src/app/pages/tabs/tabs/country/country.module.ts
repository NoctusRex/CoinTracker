import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CountryPage } from './country.page';

import { CountryPageRoutingModule } from './country-routing.module';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, CountryPageRoutingModule],
  declarations: [CountryPage],
})
export class CountryPageModule {}
