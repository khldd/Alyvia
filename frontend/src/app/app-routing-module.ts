import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layout } from './modules/layout/components/layout/layout';
import { Login } from './modules/auth/components/login/login';
import { Register } from './modules/auth/components/register/register';

const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      // { path: 'dashboard', component: DashboardComponent },
    ]
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'register',
    component: Register,
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
