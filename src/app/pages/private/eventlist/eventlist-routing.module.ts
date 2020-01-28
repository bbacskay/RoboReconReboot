import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventlistPage } from './eventlist.page';

const routes: Routes = [
  {
    path: '',
    component: EventlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventlistPageRoutingModule {}
