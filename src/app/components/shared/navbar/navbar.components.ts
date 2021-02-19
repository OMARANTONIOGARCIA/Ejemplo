import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OnlyLetras } from '../utils/letras';
import { OnlyNumber } from '../utils/number';

@Component({
    selector: 'Navar-Component',
    templateUrl: './navbar.components.html',
    styleUrls: [ './nabvar.components.css']
})

export class NavarComponent implements OnInit {

    constructor( private router:Router){

    }

    ngOnInit(): void {

      this.miPromesa();

    }


    buscarHeroe(termino:string){
        this.router.navigate(['/buscar',termino])
    }

    public keyPressOnlyNumbers(event:any) {
        OnlyNumber(event); 
    }

    public keyPressOnlyLetter(event:any){
        OnlyLetras(event);        
    }
    
    public miPromesa(): Promise<any>{

      return new Promise( (resolve,reject)=>{
          return new Promise(()=>{
            console.log("Hola");
            resolve(true);
          })
          
      });
    }


/*
private fetchData(){
    const promise = this.httpClient.get(this.apiUrl).toPromise();
    console.log(promise);  
    promise.then((data)=>{
      console.log("Promise resolved with: " + JSON.stringify(data));
    }).catch((error)=>{
      console.log("Promise rejected with " + JSON.stringify(error));
    });
  }
*/

}


