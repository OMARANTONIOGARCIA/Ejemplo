import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})

export class AboutComponent implements OnInit {

  nombre:string = 'Capitan América';
  arreglo: number[] = [1,2,3,4,5,6,7,8,9,10]
  personajes: string[] =['Iroman','Spiderman', 'Thor', 'Loki', 'Groot'];
  PI:number = Math.PI;
  porcentaje: number = 0.234;
  salario: number = 1234.5;

  constructor() { }

  ngOnInit(): void {
  }

}
