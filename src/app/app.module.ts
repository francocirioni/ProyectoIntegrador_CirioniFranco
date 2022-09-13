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
import { NewExperienciaComponent } from './componentes/exp/new-experiencia.component';
import { EditExperienciaComponent } from './componentes/exp/edit-experiencia.component';
import { NeweducacionComponent } from './componentes/educa/neweducacion.component';
import { EditeducacionComponent } from './componentes/educa/editeducacion.component';
import { NewproyectosComponent } from './componentes/proyectos/newproyectos.component';
import { EditproyectosComponent } from './componentes/proyectos/editproyectos.component';
import { NewkysComponent } from './componentes/hys2/newkys.component';
import { EditkysComponent } from './componentes/hys2/editkys/editkys.component';
import { NewfotoaComponent } from './componentes/perfil/newfotoa.component';
import { EditfotoaComponent } from './componentes/perfil/editfotoa.component';
import { MioComponent } from './componentes/mio/mio.component';
import { NewacercadeComponent } from './componentes/acercade/newacercade.component';
import { Editkys2Component } from './componentes/hys2/editkys2.component';



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
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    NewproyectosComponent,
    EditproyectosComponent,
    NewkysComponent,
    EditkysComponent,
    NewfotoaComponent,
    EditfotoaComponent,
    MioComponent,
    NewacercadeComponent,
    Editkys2Component

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
