import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ImportPage } from './import.page';

import { ImportPageRoutingModule } from './import-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ImportPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [ImportPage],
})
export class ImportPageModule {}
