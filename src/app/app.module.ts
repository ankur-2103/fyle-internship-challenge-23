import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserReopsComponent } from './user-reops/user-reops.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    UserReopsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
