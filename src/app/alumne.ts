export class Alumne{
    nom: string;
    edat : number;
    cicle: string;
    notes: number[];

    constructor(nom: string,edat : number,cicle: string,notes: number[]){
        this.nom = nom;
        this.edat = edat;
        this.cicle = cicle;
        this.notes = notes;
    }

    
}