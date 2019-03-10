import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {UsersComponent} from './users/users.component';
import {EventsComponent} from './events/events.component';
import {InterceptorModule} from './interceptor.module';
import {MessagesComponent} from './messages/messages.component';
import {DashboardComponent} from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    EventsComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InterceptorModule,
    FormsModule,
    BrowserModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
