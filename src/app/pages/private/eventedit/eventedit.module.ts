import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventeditPageRoutingModule } from './eventedit-routing.module';

import { EventeditPage } from './eventedit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventeditPageRoutingModule
  ],
  declarations: [EventeditPage]
})
export class EventeditPageModule {}
