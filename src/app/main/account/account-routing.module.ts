import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardService } from 'src/app/shared/service/guard.service';
import { EventLigaPageComponent } from './pages/event-liga-page/event-liga-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { SubscriptionPageComponent } from './pages/subscription-page/subscription-page.component';
import { TableroPosicionesPageComponent } from './pages/tablero-posiciones-page/tablero-posiciones-page.component';

const routes: Routes = [
  {
    path: 'suscripcion',
    component: SubscriptionPageComponent,
    canActivate: [GuardService]
  },
  {
    path: 'recomendacion',
    component: ProfilePageComponent,
    canActivate: [GuardService]
  },
  {
    path: 'posiciones',
    component: TableroPosicionesPageComponent,
    canActivate: [GuardService]
  },
  {
    path: 'estadisticas',
    component: EventLigaPageComponent,
    canActivate: [GuardService]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
