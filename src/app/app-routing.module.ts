import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { OrderComponent } from './pages/order/order.component';
import { ProductsComponent } from './pages/products/products.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { TodolistComponent } from './pages/todolist/todolist.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path:'', redirectTo:'login', pathMatch: 'full'
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'signup', component:SignupComponent
  },
  {
    path:'dashboard', component:DashboardComponent
  },
  {
    path:'home', component:HomeComponent
  },
  {
    path:'products', component:ProductsComponent
  },
  {
    path:'order', component:OrderComponent
  },
  {
    path:'analytics', component:AnalyticsComponent
  },
  {
    path:'aboutus', component:AboutusComponent
  },
  {
    path:'contact', component:ContactComponent
  },
  {
    path:'settings', component:SettingsComponent
  },
  {
    path:'todolist', component:TodolistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
