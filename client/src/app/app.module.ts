import { UserService } from './service/user.service';
import { authInterceptorProviders } from './helpers/auth.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeHomeComponent } from './pages/home-home/home-home.component';
import { HomeNotesComponent } from './pages/home-notes/home-notes.component';
import { AuthService } from './service/auth.service';
import { TokenService } from './service/token.service';
import { NoteService } from './service/note.service';
import { FormsModule } from '@angular/forms';
import { HomeCalenderComponent } from './pages/home-calender/home-calender.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent, 
    HomeComponent,
    SidebarComponent,
    HeaderComponent,
    HomeHomeComponent,
    HomeNotesComponent,
    HomeCalenderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    authInterceptorProviders,
    AuthService,
    TokenService,
    NoteService,
    UserService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
