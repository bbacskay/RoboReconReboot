import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventlistPageRoutingModule } from './eventlist-routing.module';

import { EventlistPage } from './eventlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventlistPageRoutingModule
  ],
  declarations: [EventlistPage]
})
export class EventlistPageModule {}
