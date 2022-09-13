import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditeducacionComponent } from './componentes/educa/editeducacion.component';
import { NeweducacionComponent } from './componentes/educa/neweducacion.component';

import { EditExperienciaComponent } from './componentes/exp/edit-experiencia.component';
import { NewExperienciaComponent } from './componentes/exp/new-experiencia.component';
import { HomeComponent } from './componentes/home/home.component';


import { Editkys2Component } from './componentes/hys2/editkys2.component';
import { NewkysComponent } from './componentes/hys2/newkys.component';


import { LoginComponent } from './componentes/login/login.component';


import { EditproyectosComponent } from './componentes/proyectos/editproyectos.component';
import { NewproyectosComponent } from './componentes/proyectos/newproyectos.component';




import { NewfotoaComponent } from './componentes/perfil/newfotoa.component';
import { EditfotoaComponent } from './componentes/perfil/editfotoa.component';
import { NewacercadeComponent } from './componentes/acercade/newacercade.component';





const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  
  { path: 'nuevaexp', component: NewExperienciaComponent },
  { path: 'editexp/:id', component: EditExperienciaComponent },

  { path: 'nuevaedu', component: NeweducacionComponent },
  { path: 'editedu/:id', component: EditeducacionComponent },

  { path: 'editpro/:id', component: EditproyectosComponent },
  { path: 'nuevapro', component: NewproyectosComponent },

  { path: 'nuevakys', component: NewkysComponent },
  { path: 'editkys2/:id', component: Editkys2Component },

  { path: 'nuevafotoa', component: NewfotoaComponent },
  { path: 'editfotoa/:id', component: EditfotoaComponent },
  
  { path: 'nuevoacercade', component: NewacercadeComponent },
  
 




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }