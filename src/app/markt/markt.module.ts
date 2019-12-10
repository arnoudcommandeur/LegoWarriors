import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarktPageRoutingModule } from './markt-routing.module';

import { MarktPage } from './markt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarktPageRoutingModule
  ],
  declarations: [MarktPage]
})
export class MarktPageModule {}
