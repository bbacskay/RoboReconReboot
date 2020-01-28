import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventaddPageRoutingModule } from './eventadd-routing.module';

import { EventaddPage } from './eventadd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventaddPageRoutingModule
  ],
  declarations: [EventaddPage]
})
export class EventaddPageModule {}
