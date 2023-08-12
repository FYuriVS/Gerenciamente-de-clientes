import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () =>
      import('./models/pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'clients',
    loadChildren: () =>
      import('./models/pages/clients/clients.module').then(
        (m) => m.ClientsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
