import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitan America']

  //papelera: string = '';

  heroeBorrado: string = ''

  borrarHeroe(): void{
    //this.papelera = this.heroes[this.heroes.length-1];

    this.heroeBorrado = this.heroes.pop() || '';
    console.log(this.heroeBorrado)

  }
}
