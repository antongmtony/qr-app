import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WithoutMobilePageRoutingModule } from './without-mobile-routing.module';

import { WithoutMobilePage } from './without-mobile.page';

import { QRCodeModule } from 'angular2-qrcode';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WithoutMobilePageRoutingModule,
    QRCodeModule
  ],
  declarations: [WithoutMobilePage]
})
export class WithoutMobilePageModule {}
