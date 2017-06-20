import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppContentComponent } from './components/app-content/app-content.component';

import {WindowSizeService} from './shared/window-size.service';
import {SidenavStateService} from './shared/sidenav-state.service';

import { WindowTokenModule } from 'ngx-window-token';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    WindowTokenModule
  ],
  providers: [WindowSizeService, SidenavStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
