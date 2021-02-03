import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'Navar-Component',
    templateUrl: './navbar.components.html',
    styleUrls: [ './nabvar.components.css']
})

export class NavarComponent implements OnInit {

    constructor( private router:Router){

    }

    ngOnInit(): void { }


    buscarHeroe(termino:string){
        this.router.navigate(['/buscar',termino])
    }



}
