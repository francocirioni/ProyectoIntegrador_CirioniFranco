import { Component, OnInit } from '@angular/core';
import { Fotoa } from 'src/app/model/fotoa';
import { FotoaService } from 'src/app/service/fotoa.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {


  fotoa :  Fotoa [] = [];


  constructor(private FotoaS: FotoaService, private tokenService: TokenService) { }

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
    this.FotoaS.lista().subscribe(
      data =>{
        this.fotoa = data;
      }
    )
  }
  delete(id?: number){
    if( id != undefined){
      this.FotoaS.delete(id).subscribe(
        data => {
          this.cargarPerfil();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }

}
