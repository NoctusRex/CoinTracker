import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FoundPage } from './found.page';

import { FoundPageRoutingModule } from './found-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    FoundPageRoutingModule,
    ComponentsModule,
    ScrollingModule,
  ],
  declarations: [FoundPage],
})
export class FoundPageModule {}
