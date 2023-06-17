import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeContainerComponent } from './home-container.component';
import { LoginContainerModule } from '../login-container/login-container.module';



@NgModule({
  declarations: [HomeContainerComponent],
  imports: [
    CommonModule
  ],
})
export class HomeContainerModule { }
