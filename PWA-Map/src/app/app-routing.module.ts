import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'store', pathMatch: 'full'},
  { path: 'map', loadChildren: () => import('src/app/map/map.module').then(m => m.MapModule) },
  { path: 'history', loadChildren: () => import('src/app/history/history.module').then(m => m.HistoryModule) },
  { path: 'store', loadChildren: () => import('src/app/store/store.module').then(m => m.StoreModule) },
  { path: 'edit', loadChildren: () => import('src/app/edit/edit.module').then(m => m.EditModule) },
  { path: 'tour', loadChildren: () => import('src/app/tour/tour.module').then(m => m.TourModule) },
  { path: '**', redirectTo: 'store', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
