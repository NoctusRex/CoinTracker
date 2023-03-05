import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchPage } from './search.page';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { SearchPageRoutingModule } from './search-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SearchPageRoutingModule,
    ComponentsModule,
    ScrollingModule,
  ],
  declarations: [SearchPage],
})
export class SearchPageModule {}
