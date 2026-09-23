export class Producte{
    nom :string;
    preu: number;

    constructor(nom:string, preu:number){
        this.nom = nom;
        this.preu = preu;
    }

    //Mètode normal
    descripcio() : string{
        return `${this.nom} - ${this.preu}€`
    }

    descompte(): number{
        return this.preu - (this.preu * 0.1)
    }

    //Getters i Setters
    getPreuAmbIVA() : number{
        return this.preu * 1.21;
    }

}