import { Component,  } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes:string[] = ['Goku','Vegeta','Gohan','krilin','Trunks','Goten','Picoro'];

  heroeBorrado?: string;

  borrarHeroe(){
    
    this.heroeBorrado = this.heroes.shift();
  }

}
