import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './pages/public/home/home.module#HomePageModule'
  },
  {
    path: 'settings',
    loadChildren: './pages/public/settings/settings.module#SettingsPageModule'
  },
  {
    path: 'login',
    loadChildren: './pages/public/login/login.module#LoginPageModule'
  },
  { 
    path: 'private', 
    canActivate: [AuthGuardService],
    loadChildren: './pages/private/private-routing.module#PrivateRoutingModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
