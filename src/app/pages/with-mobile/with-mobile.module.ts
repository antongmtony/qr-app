import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WithMobilePageRoutingModule } from './with-mobile-routing.module';

import { WithMobilePage } from './with-mobile.page';

import { QRCodeModule } from 'angular2-qrcode';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WithMobilePageRoutingModule,
    QRCodeModule
  ],
  declarations: [WithMobilePage]
})
export class WithMobilePageModule {}
