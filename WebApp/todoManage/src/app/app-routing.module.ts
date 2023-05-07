import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoreModule } from 'src/app/modules/core/core.module';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('../app/modules/core/core.module').then((m) => m.CoreModule),
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
