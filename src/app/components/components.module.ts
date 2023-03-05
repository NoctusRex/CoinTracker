import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CoinComponent } from './coin/coin.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [FileUploadComponent, CoinComponent],
  exports: [FileUploadComponent, CoinComponent],
})
export class ComponentsModule {}
