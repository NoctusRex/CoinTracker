import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ValuePage } from './value.page';

import { ValuePageRoutingModule } from './value-routing.module';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, ValuePageRoutingModule],
  declarations: [ValuePage],
})
export class ValuePageModule {}
