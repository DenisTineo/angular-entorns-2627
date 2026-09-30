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

    //Mètode per presentar l'alumne
    presentar() : string {
        return `Soc ${this.nom}, tinc ${this.edat} anys i estudio ${this.cicle}`;
    }

    //Getters
    //Getter per obtenir la mitjana de notes
    mitjanaNotes() : number {
        let total : number = 0;
        let i : number = 0;
        for(i = 0; i< this.notes.length; i++){
        total += this.notes[i];
        }
        return total / i;
    }

    //Getter per saber si l'alumne està aprobat
    haAprobat() : boolean{
        if(this.mitjanaNotes() >= 5){
            return true;
        }else{
            return false;
        }
    }


}