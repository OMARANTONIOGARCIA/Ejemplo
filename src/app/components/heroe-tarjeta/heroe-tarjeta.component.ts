import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe } from 'src/app/servicios/heroes.service';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  //recibe el arreglo de heroe
  @Input() heroe:any = {};
  // recibe el index idx
  @Input() index:number = 0;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  verHeroe(){
    console.log(this.index);
    this.router.navigate(['/heroe', this.index])
    
  }


}
