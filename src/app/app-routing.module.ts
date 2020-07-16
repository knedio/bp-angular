import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { DefaultLayoutComponent } from '_layouts/default-layout/default-layout.component'
import { LoginComponent } from '_pages/login/login.component'
import { HomeComponent } from '_pages/home/home.component'

import { AuthGuard } from '_core/guards/auth/auth.guard'
import { GuestGuard } from '_core/guards/guest/guest.guard'

const guestRoute: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    canActivate: [GuestGuard],
    canActivateChild: [GuestGuard],
    children: [
      { path: '', component: LoginComponent },
    ]
  }
]

const authRoute: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      { path: 'home', component: HomeComponent }, 
    ]
  }
]

const routes: Routes = [
  ...guestRoute,
  ...authRoute,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
