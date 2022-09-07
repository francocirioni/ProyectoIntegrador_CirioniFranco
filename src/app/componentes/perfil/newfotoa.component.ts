import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fotoa } from 'src/app/model/fotoa';
import { FotoaService } from 'src/app/service/fotoa.service';

@Component({
  selector: 'app-newfotoa',
  templateUrl: './newfotoa.component.html',
  styleUrls: ['./newfotoa.component.css']
})
export class NewfotoaComponent implements OnInit {


  nombreE: string;

  constructor(private FotoaS: FotoaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const fotoa = new Fotoa(this.nombreE);
    this.FotoaS.save(fotoa).subscribe(
      data =>{
        alert("añadida correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("falló");
        this.router.navigate(['']);
      }
    )
  }

}
