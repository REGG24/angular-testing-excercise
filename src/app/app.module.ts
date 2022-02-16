import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DoctorOnlineComponent } from './doctor-online/doctor-online.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorOnlineComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
