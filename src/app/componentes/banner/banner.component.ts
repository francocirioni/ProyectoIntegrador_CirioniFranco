import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/service/persona.service';
import { persona } from 'src/app/model/persona.model';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  persona: persona = new persona ("","","");

  

  constructor(public personaService: PersonaService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true;
  
      }else{this.isLogged = false;}

    this.personaService.getPersona().subscribe(data => {this.persona = data})
  }

   onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }

 


}
