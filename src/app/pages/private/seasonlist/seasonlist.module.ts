import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeasonlistPageRoutingModule } from './seasonlist-routing.module';

import { SeasonlistPage } from './seasonlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeasonlistPageRoutingModule
  ],
  declarations: [SeasonlistPage]
})
export class SeasonlistPageModule {}
