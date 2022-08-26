import { Component, OnInit } from '@angular/core';
import { Perfil } from 'src/app/model/perfil';
import { PerfilService } from 'src/app/service/perfil.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {


  perfil :  Perfil [] = [];


  constructor(private perfilS: PerfilService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarPerfil();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarPerfil(): void{
    this.perfilS.lista().subscribe(
      data =>{
        this.perfil = data;
      }
    )
  }
  delete(id?: number){
    if( id != undefined){
      this.perfilS.delete(id).subscribe(
        data => {
          this.cargarPerfil();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }

}
