import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Redes } from 'src/app/model/redes';
import { RedesService } from 'src/app/service/redes.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-logoarg',
  templateUrl: './logoarg.component.html',
  styleUrls: ['./logoarg.component.css']
})
export class LogoargComponent implements OnInit {

  red: Redes [] = [];


  isLogged = false;

  constructor(private router:Router, private tokenService: TokenService,
    private Redes: RedesService) { }

  ngOnInit(): void {

    if(this.tokenService.getToken()){
    this.isLogged=true;

    }else{this.isLogged = false;}
  
    this.cargarRedes();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  }

  cargarRedes(): void {
    this.Redes.lista().subscribe(data => { this.red= data; })
  }



  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }

  login(){
this.router.navigate(['/login'])
  }

}
