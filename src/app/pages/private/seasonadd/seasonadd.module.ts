import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeasonaddPageRoutingModule } from './seasonadd-routing.module';

import { SeasonaddPage } from './seasonadd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeasonaddPageRoutingModule
  ],
  declarations: [SeasonaddPage]
})
export class SeasonaddPageModule {}
