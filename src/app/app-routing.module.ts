import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'chart-view',
    loadChildren: () => import('./components/chart-view/chart-view.module').then(m => m.ChartViewModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./components/about/about.module').then(m => m.AboutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
