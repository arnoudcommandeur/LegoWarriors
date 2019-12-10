import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarktPage } from './markt.page';

const routes: Routes = [
  {
    path: '',
    component: MarktPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarktPageRoutingModule {}
