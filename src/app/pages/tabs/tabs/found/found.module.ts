import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FoundPage } from './found.page';

import { FoundPageRoutingModule } from './found-routing.module';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, FoundPageRoutingModule],
  declarations: [FoundPage],
})
export class FoundPageModule {}
