import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeasonaddPage } from './seasonadd.page';

const routes: Routes = [
  {
    path: '',
    component: SeasonaddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeasonaddPageRoutingModule {}
