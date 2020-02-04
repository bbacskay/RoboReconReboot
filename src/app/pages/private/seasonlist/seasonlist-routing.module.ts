import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeasonlistPage } from './seasonlist.page';

const routes: Routes = [
  {
    path: '',
    component: SeasonlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeasonlistPageRoutingModule {}
