import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ScoutmanagerPage } from './scoutmanager.page';

const routes: Routes = [
  {
    path: '',
    component: ScoutmanagerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ScoutmanagerPage]
})
export class ScoutmanagerPageModule {}
