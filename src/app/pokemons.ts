export class Pokemons{
    nom : string;
    hp: number;

    constructor(nom:string){
        this.nom = nom;
        this.hp = 15;
    }

    mostrarHP(): number{
        return this.hp;
    }

    mostrarInfo(): string{
        return `Nom: ${this.nom}, HP: ${this.hp}`;
    }

    getMitjaHP():number{
        return this.hp/2;
    }
    
}
