import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, HeroesService } from 'src/app/servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: [
  ]
})
export class BuscadorComponent implements OnInit {

  heroes:Heroe[] = [];
  termino:string="";
  constructor(private activateRoute:ActivatedRoute, private _heroeService:HeroesService, private router:Router) { }

  ngOnInit(): void {

    this.activateRoute.params.subscribe(params =>{
       console.log(params['termino']);
       this.termino = params['termino'];
       this.heroes = this._heroeService.buscarHeroe(this.termino);
       console.log( this.heroes);

    })
  }

  verHeroe(idx:number){
    this.router.navigate(['/heroe',idx])

  }

}
