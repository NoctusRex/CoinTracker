import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CountryPage } from './country.page';

import { CountryPageRoutingModule } from './country-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CountryPageRoutingModule,
    ComponentsModule,
    ScrollingModule,
  ],
  declarations: [CountryPage],
})
export class CountryPageModule {}
