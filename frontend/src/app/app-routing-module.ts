import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layout } from './modules/layout/components/layout/layout';
import { Login } from './modules/auth/components/login/login';
import { Register } from './modules/auth/components/register/register';
import { authGuard } from './modules/core/guards/auth-guard'; // <--- Import the guard

const routes: Routes = [
  {
    path: '',
    component: Layout,
    canActivate: [authGuard], // <--- Protect this route and its children
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
  { path: 'companies', loadChildren: () => import('./modules/company/company-module').then(m => m.CompanyModule) },
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
