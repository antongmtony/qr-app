import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WithMobilePage } from './with-mobile.page';

const routes: Routes = [
  {
    path: '',
    component: WithMobilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WithMobilePageRoutingModule {}
