import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'navigation',
    loadChildren: () => import('./components/navigation/navigation.module').then(m => m.NavigationModule)
  },
  // {
  //   path: 'chart-view',
  //   loadChildren: () => import('./components/chart-view/chart-view.module').then(m => m.ChartViewModule)
  // },
  // {
  //   path: 'about',
  //   loadChildren: () => import('./components/about/about.module').then(m => m.AboutModule)
  // },
  { path: '',  redirectTo: 'navigation', pathMatch: 'full'},
  { path: '**',  redirectTo: 'navigation'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
