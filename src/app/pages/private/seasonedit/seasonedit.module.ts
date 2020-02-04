import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeasoneditPageRoutingModule } from './seasonedit-routing.module';

import { SeasoneditPage } from './seasonedit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeasoneditPageRoutingModule
  ],
  declarations: [SeasoneditPage]
})
export class SeasoneditPageModule {}
