import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventaddPage } from './eventadd.page';

const routes: Routes = [
  {
    path: '',
    component: EventaddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventaddPageRoutingModule {}
