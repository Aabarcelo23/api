import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageModule } from '../home/home.module';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children:[
      {
        path:"home",
        loadChildren:() =>
        import("../home/home.module").then(m => m.HomePageModule)


      },
      {

        path: '',
    redirectTo: 'home',
    pathMatch: 'full'
      },


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}