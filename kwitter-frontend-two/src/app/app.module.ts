import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { MomentModule } from 'angular2-moment';
import { ApiService } from './services/api.service';
import { HomeComponent } from './components/home/home.component';
import { UserGuard } from './guards/user.guard';
import { LoginComponent } from './components/login/login.component';
import { UserService } from './services/user.service';
import { NotificationActions } from "./actionCreators/notification-actions";
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule,
    //MomentModule,
    //MessagesModule,
    HttpModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({timeOut: 7000,progressBar: true,closeButton: true}),
  ],
  providers: [
    ApiService,
    UserGuard,
    appRoutingProviders,
    UserService,
    MomentModule,
    NotificationActions,
    ToastrService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
