import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Redes } from 'src/app/model/redes';
import { RedesService } from 'src/app/service/redes.service';

@Component({
  selector: 'app-editredes',
  templateUrl: './editredes.component.html',
  styleUrls: ['./editredes.component.css']
})
export class EditredesComponent implements OnInit {

  red : Redes = null;

  constructor(private redes: RedesService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.redes.detail(id).subscribe(
        data =>{
          this.red = data;
        }, err =>{
          alert("Error al modificar experiencia");
          this.router.navigate(['']);
        }
      )
    }
  
    onUpdate(): void{
      const id = this.activatedRouter.snapshot.params['id'];
      this.redes.update(id, this.red).subscribe(
        data => {
          this.router.navigate(['']);
        }, err =>{
           alert("Error al modificar experiencia");
           this.router.navigate(['']);
        }
      )
    }

}
