import { Component, OnInit } from '@angular/core';
import { Ban } from 'src/app/model/ban';
import { BanService } from 'src/app/service/ban.service';
import { TokenService } from 'src/app/service/token.service';



@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {


  ban : Ban [] = [];

  constructor(private Ban: BanService, private tokenService: TokenService) { }
 
  isLogged = false;


  ngOnInit(): void {
    this.cargarBan();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarBan(): void{
    this.Ban.lista().subscribe(
      data =>{
        this.ban = data;
      }
    )
  }
  


}
