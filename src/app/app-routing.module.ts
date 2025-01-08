import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ListCarComponent } from './components/list-car/list-car.component';
import { CarComponent } from './components/car/car.component';
import { AddCarComponent } from './components/add-car/add-car.component';
import { HomePagesComponent } from './components/home-pages/home-pages.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomePagesComponent},
  {path:'register',component:RegisterComponent},
  {path:'listcar',component:ListCarComponent},
  {path:'car/:id',component:CarComponent},
  {path:'addcar',component:AddCarComponent},
  {path:"**",component:HomePagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
