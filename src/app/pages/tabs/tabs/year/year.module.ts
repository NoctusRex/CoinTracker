import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { YearPage } from './year.page';

import { YearPageRoutingModule } from './year-routing.module';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, YearPageRoutingModule],
  declarations: [YearPage],
})
export class YearPageModule {}
