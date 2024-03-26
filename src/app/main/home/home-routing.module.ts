import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
      path: '', 
      component: HomePageComponent
  },
  {
    path: 'nosotros', 
    component: AboutPageComponent
  },
  {
    path: 'contacto', 
    component: ContactPageComponent
  }
  /*{
    path: '**',//TODO 404 cuando no existe la ruta
    redirectTo: '/tracks'
  }*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
