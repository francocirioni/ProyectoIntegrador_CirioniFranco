import { Component, OnInit } from '@angular/core';
import { Kys } from 'src/app/model/kys';
import { KysService } from 'src/app/service/kys.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hys2',
  templateUrl: './hys2.component.html',
  styleUrls: ['./hys2.component.css']
})
export class Hys2Component implements OnInit {

  kys: Kys[] = [];

  constructor(private kysS: KysService, private tokenService: TokenService) { }
  isLogged = false;
 
  ngOnInit(): void {
    this.cargarKys();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarKys(): void{
    this.kysS.lista().subscribe(
      data =>{
        this.kys = data;
      }
    )
  }
  delete(id?: number){
    if( id != undefined){
      this.kysS.delete(id).subscribe(
        data => {
          this.cargarKys();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }
}
