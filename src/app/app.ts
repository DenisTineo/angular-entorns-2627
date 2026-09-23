import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Producte } from './interfaces/producte';
import { Producte as ProducteClass } from './producte'; //importem la classe producte assignant un alias


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-entorns-2627');

  prod1 : Producte = {
    id: 1,
    nom: 'a',
    preu: 5,
    disponible: true
  };

  prod2 : Producte = {
    id: 2,
    nom: 'b',
    preu: 6,
    disponible: false
  };

  prod3 : Producte = {
    id: 3,
    nom: 'y',
    preu: 15,
    disponible: true
  };

  biblioteca : Producte[] = [this.prod1, this.prod2, this.prod3];

  p1 = new ProducteClass('Teclat', 89.99);

  /*constructor(){
  console.log(this.p1.toString());
  console.log(this.p1.getPreuAmbIVA());
  }*/

  // 1. AFEGIR UN MÈTODE A LA CLASSE PRODUCTE descripcio() que retorni un string amb nom i preu
  // 2. MÈTODE descompte() que retorni el preu amb un 10% de rebaixa
  // 3. Crear un nou producte i mostreu el descompte per consola
  prod4 = new ProducteClass('t', 5);

  constructor(){
  console.log(this.prod4.descompte());
  alert(this.prod4.descompte());
  }
  // 4. Cercar la manera de mostrar el descompte amb un popup

}
