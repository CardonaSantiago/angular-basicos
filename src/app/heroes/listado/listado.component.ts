import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes:String[] = ['Spiderman','Ironman','Hulk','Thor','Capitan America']
  heroeBorrado: String = '';
  borrandoHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
    
  }

}
