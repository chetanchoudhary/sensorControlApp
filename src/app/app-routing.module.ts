import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule', canLoad: [AuthGuard] },
  { path: 'dht11', loadChildren: './dht11/dht11.module#Dht11PageModule', canLoad: [AuthGuard] },
  { path: 'led', loadChildren: './led/led.module#LedPageModule', canLoad: [AuthGuard] },
  { path: 'push-button', loadChildren: './push-button/push-button.module#PushButtonPageModule', canLoad: [AuthGuard] },
  { path: 'relay', loadChildren: './relay/relay.module#RelayPageModule', canLoad: [AuthGuard] },
  { path: 'auth', loadChildren: './auth/auth.module#AuthPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
