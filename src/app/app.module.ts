import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeContainerModule } from './modules/home-container/home-container.module';
import { LoginContainerModule } from './modules/login-container/login-container.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeContainerModule,
    LoginContainerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
