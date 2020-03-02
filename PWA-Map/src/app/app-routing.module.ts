import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'store', pathMatch: 'full'},
  { path: 'map', loadChildren: () => import('src/app/map/map.module').then(m => m.MapModule) },
  { path: 'history', loadChildren: () => import('src/app/history/history.module').then(m => m.HistoryModule) },
  { path: 'store', loadChildren: () => import('src/app/store/store.module').then(m => m.StoreModule) },
  { path: '**', redirectTo: 'store', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
