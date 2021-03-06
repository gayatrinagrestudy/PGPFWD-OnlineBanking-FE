import { UpdateUserComponent } from './components/update-user/update-user.component';
import { AdminComponent } from './components/admin/admin.component';
import { RequestsComponent } from './components/requests/requests.component';
import { PayeelistComponent } from './components/payeelist/payeelist.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    pathMatch:'full',
    canActivate: [AuthGuard]
  },
  {
    path:'transaction',
    component:TransactionsComponent,
    pathMatch:'full',
    canActivate: [AuthGuard]
  },
  {
    path:'payee',
    component:PayeelistComponent,
    pathMatch:'full',
    canActivate: [AuthGuard]
  },
  {
   path:'requests',
   component:RequestsComponent,
   pathMatch:'full',
   canActivate: [AuthGuard]
},
 { 
   path:'admin',
   component:AdminComponent, 
   pathMatch:'full'
 },
 { 
  path:'admindashboard',
  component:AdmindashboardComponent,
  pathMatch:'full'
},
{ 
  path:'updateUser',
  component:UpdateUserComponent,
  pathMatch:'full'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
