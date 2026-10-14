// aquest fitxer conté la lògica: propietats, mètodes i getters
import { Component } from '@angular/core';
import { Producte } from '../../interfaces/producte';
import { Producte2 } from '../../interfaces/producte2';

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

  prod1 : Producte = {
    id: 1,
    nom: 'a',
    preu: 5,
    estoc: 4,
    categoria: 'Informatica'
  };

  prod2 : Producte = {
    id: 2,
    nom: 'b',
    preu: 6,
    estoc: 3,
    categoria: 'Mueble'
  };

  prod3 : Producte = {
    id: 3,
    nom: 'y',
    preu: 15,
    estoc: 0,
    categoria: 'alegria'
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

producteXif : Producte2 = {
  id: 1,
  nom: 'castanya',
  preu: 13,
  estoc: 60,
  categoria: 'aliment',
  descripcio : 'Castanyes ben bones',
  estat: ''
};

mostrarDesc = false;
toggleDesc() : void{
  this.mostrarDesc = !this.mostrarDesc;
}

/*
AGEFIR ETIQUETA OFERTA I GRATUÏT
si el preu es inferior a 20 --> oferta
si el preu es 0 --> gratuït
si el preu es superior a 100 --> premium
*/

/*
if dins d'un for per marcar productes especials
si la categoria es informàtica --> div amb "destacat"
podeu posar estils i si voleu emojis estrella...
*/


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