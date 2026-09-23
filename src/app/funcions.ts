import { pokemon } from './interfaces/pokemon';

export function getActius(dex: pokemon[]): pokemon[] {
    return dex.filter((p) => p.estat === true);
}

export function findById(dex: pokemon[], id: number): pokemon | undefined{
    return dex.find((p) => p.id === id);
}

export function formatarElement(pokemon: pokemon): string {
    return `ID: ${pokemon.id}, Nom: ${pokemon.nom}, Tipus: ${pokemon.tipus}
    , Atac: ${pokemon.atac}, HP: ${pokemon.hp}, Estat. ${pokemon.estat}`;
}

export function saludar(nom: string): string{
    return `Hola, ${nom}`;
}

export function esMajorEdat(edat:number): boolean{
    return edat>=18;
}

export function sumarArray(nums: number[]): number{
    let total: number = 0;
    for(let i = 0; i< nums.length; i++){
        total += nums[i];
    }
    return total;
}