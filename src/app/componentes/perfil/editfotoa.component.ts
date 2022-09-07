import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fotoa } from 'src/app/model/fotoa';
import { FotoaService } from 'src/app/service/fotoa.service';

@Component({
  selector: 'app-editfotoa',
  templateUrl: './editfotoa.component.html',
  styleUrls: ['./editfotoa.component.css']
})
export class EditfotoaComponent implements OnInit {

  fotoa: Fotoa = null;

  constructor(
    private fotoaS: FotoaService,
    private activatedRouter : ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(): void {

    const id = this.activatedRouter.snapshot.params['id'];
    this.fotoaS.detail(id).subscribe(
      data =>{
        this.fotoa = data;
      }, err =>{
         alert("Error al modificar");
         this.router.navigate(['']);
      }
    )

  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.fotoaS.update(id, this.fotoa).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

}
