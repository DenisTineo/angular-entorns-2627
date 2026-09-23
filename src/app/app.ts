import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Producte } from './interfaces/producte';

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


}
