import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainLayoutComponent} from './main-layout/main-layout.component';
import {HandleMoneyComponent} from './handle-money/handle-money.component';
import {CategoryComponent} from './category/category.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'handle',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'handle',
        component: HandleMoneyComponent
      },
      {
        path: 'category',
        component: CategoryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
