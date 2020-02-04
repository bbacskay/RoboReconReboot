import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeasoneditPage } from './seasonedit.page';

const routes: Routes = [
  {
    path: '',
    component: SeasoneditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeasoneditPageRoutingModule {}
