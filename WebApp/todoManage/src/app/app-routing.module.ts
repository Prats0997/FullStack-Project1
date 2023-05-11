import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoreModule } from 'src/app/modules/core/core.module';
import { AuthGuard } from './modules/core/guards/auth.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('../app/modules/core/core.module').then((m) => m.CoreModule),
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'landing-page',
    loadChildren: () =>
      import('./modules/userdashboard/userdashboard.module').then(
        (m) => m.UserdashboardModule
      ),
    canActivate: [AuthGuard],
  },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
