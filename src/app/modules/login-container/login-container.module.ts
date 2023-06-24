import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginContainerComponent } from './login-container.component';
import { SharedModuleModule } from 'src/app/shared/shared-module/shared-module.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginContainerComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule,
    ReactiveFormsModule
  ],
  exports: [
    
  ]
})
export class LoginContainerModule { }
