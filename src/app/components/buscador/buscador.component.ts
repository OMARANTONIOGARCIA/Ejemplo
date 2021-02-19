import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, HeroesService } from 'src/app/servicios/heroes.service';
import { OnlyLetras } from '../shared/utils/letras';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {

  heroes:Heroe[] = [];
  termino?:string;
  constructor(private activateRoute:ActivatedRoute, private _heroesService:HeroesService, private router:Router) { }

  ngOnInit(): void {

    this.activateRoute.params.subscribe(params =>{
      this.termino =params['termino'];
      this.heroes = this._heroesService.buscarHeroe( params['termino'] );
      console.log( this.heroes );

    })
  }





}
