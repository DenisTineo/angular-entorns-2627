// aquest fitxer conté la lògica: propietats, mètodes i getters
import { Component } from '@angular/core';
import { Producte } from '../../interfaces/producte';

@Component({
  selector: 'app-tarjeta',
  imports: [],
  templateUrl: './tarjeta.html',
  styleUrl: './tarjeta.css',
})
export class Tarjeta {
  nom : string = 'Ordinador Gamer Pro';
  preu : number = 1299;
  estoc: number = 5;

  producte : Producte = {
    id:1,
    nom: 'Ordinador Gamer Pro',
    preu: 1299,
    estoc: 5,
    categoria: 'Informàtica'
  };


//  get nomDelGetter(): TipusRetorn {
//    return calcul;
//  }

// Al TEMPLATE s'usa com una PROPIETAT, sense parentesis {{nomDelGetter}}


get preuAmbIVA() : number {
  return this.producte.preu * 1.21;
}


get estatDisponibilitat() : string {
  if(this.producte.estoc === 0) return 'Esgotat';
  if(this.producte.estoc < 3) return 'Ultimes Unitats';
  return 'Disponible';
}


}



/*
INTERPOLACIÓ DE DADES
Permet conectar les dades del TS a l'HTML
Permet incrustar expressions TS dins de l'HTML, angular avalua l'expressió i mostra el resultat com a text

{{nomPropietat}} --> mostra el valor d'una propietat de la classe
{{2 + 3}}  --> mostra 5
{{text.toUpperCase()}} --> mostra el text en majúscules
{{edat >= 18 ? 'Major d\'edat' : 'Menor d\'edat'}} --> operador ternari

amb {{nom}} --> el valor pot canviar i l'HTML s'actualitzarà automàticament. Hardcoded és per sempre estàtic
*/