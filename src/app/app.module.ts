import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { LogoargComponent } from './componentes/logoarg/logoarg.component';
import { RedesComponent } from './componentes/redes/redes.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { AboutmeComponent } from './componentes/aboutme/aboutme.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { ExpComponent } from './componentes/exp/exp.component';
import { EducaComponent } from './componentes/educa/educa.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { Hys2Component } from './componentes/hys2/hys2.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FootComponent } from './componentes/foot/foot.component';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoargComponent,
    RedesComponent,
    BannerComponent,
    AboutmeComponent,
    AcercadeComponent,
    PerfilComponent,
    ExpComponent,
    EducaComponent,
    Hys2Component,
    ProyectosComponent,
    FootComponent,
    HomeComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
