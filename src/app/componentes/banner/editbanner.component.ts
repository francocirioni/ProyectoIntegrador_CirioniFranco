import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ban } from 'src/app/model/ban';
import { BanService } from 'src/app/service/ban.service';

@Component({
  selector: 'app-editbanner',
  templateUrl: './editbanner.component.html',
  styleUrls: ['./editbanner.component.css']
})
export class EditbannerComponent implements OnInit {

  ban : Ban = null; 

  constructor(
    private Ban: BanService,
    private activatedRouter : ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    const id = this.activatedRouter.snapshot.params['id'];
    this.Ban.detail(id).subscribe(
      data =>{
        this.ban = data;
      }, err =>{
         alert("Error al modificar");
         this.router.navigate(['']);
      }
    )

  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.Ban.update(id, this.ban).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

}
