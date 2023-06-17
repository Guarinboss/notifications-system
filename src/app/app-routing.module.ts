import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeContainerComponent } from './modules/home-container/home-container.component';
import { LoginContainerComponent } from './modules/login-container/login-container.component';

const routes: Routes = [
  { path: 'home', component: HomeContainerComponent },
  { path: 'login', component: LoginContainerComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
