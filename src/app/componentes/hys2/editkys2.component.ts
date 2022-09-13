import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Kys } from 'src/app/model/kys';
import { KysService } from 'src/app/service/kys.service';

@Component({
  selector: 'app-editkys2',
  templateUrl: './editkys2.component.html',
  styleUrls: ['./editkys2.component.css']
})
export class Editkys2Component implements OnInit {
  
  kys: Kys = null;
  
  constructor(
    private kysS: KysService,
    private activatedRouter : ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.kysS.detail(id).subscribe(
      data =>{
        this.kys = data;
      }, err =>{
         alert("Error al modificar");
         this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.kysS.update(id, this.kys).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la educacion");
        this.router.navigate(['']);
      }
    )
  }

}
