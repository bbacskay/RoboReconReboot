import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ScoutmonitorPage } from './scoutmonitor.page';

const routes: Routes = [
  {
    path: '',
    component: ScoutmonitorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ScoutmonitorPage]
})
export class ScoutmonitorPageModule {}
