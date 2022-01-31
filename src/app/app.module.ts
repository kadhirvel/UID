import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { BlogsComponent } from './blogs/blogs.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {  MatToolbarModule } from '@angular/material/toolbar';
import {  MatSidenavModule } from '@angular/material/sidenav';
import {  MatButtonModule } from '@angular/material/button';
import {  MatIconModule } from '@angular/material/icon';
import {  MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,  
    UsersComponent,  
    BlogsComponent, 
    HeaderComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule, /** http client module to use http api for backend call. example get, post, etc */
    MatToolbarModule, /** Mat tool bar module used in app component header  */
    MatSidenavModule, /** Mat side nav module used in app component header for home, user and blogs menu creation */
    MatButtonModule, /** Mat button module used in side nave for better UI */
    MatIconModule, /** Mat Icon module used in side nav */
    MatDividerModule, /** Mat Divider module used in side nav to divide Menu text and menu options*/
    MatTableModule /** Mat Table Module used in blogs page to displays blogs data sources */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
