import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WithoutMobilePage } from './without-mobile.page';



const routes: Routes = [
  {
    path: '',
    component: WithoutMobilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WithoutMobilePageRoutingModule {}
