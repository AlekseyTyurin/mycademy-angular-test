import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import {UsersDataService} from "./users-list/users-data.service";
import {HttpClientModule} from "@angular/common/http";
import {MatInputModule} from "@angular/material/input";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ConvertBirthdayToAge} from "./_pipes/convert-age.pipe";
import {ConvertEmailToName} from "./_pipes/convert-name.pipe";

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    ConvertBirthdayToAge,
    ConvertEmailToName
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [
    UsersDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
