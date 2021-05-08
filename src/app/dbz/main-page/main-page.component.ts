import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  // cambiarNombre( event: any){
  //   console.log(event.target.value)
  // }

  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }
  ];

  agregar(  ){

    if ( this.nuevo.nombre.trim().length === 0 )//trim() para borrar espacios en blanco y length para obtener la cantidad de caracteres
    {
      return;
    }

    console.log(this.nuevo);

    this.personajes.push(this.nuevo);
    this.nuevo = {nombre: '', poder: 0}
  }

}
