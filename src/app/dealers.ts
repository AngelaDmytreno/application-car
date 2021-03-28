export interface Dealers {
    id: string;
    name: string;
    amountOfCars?: number ;
    country: string;
    foundedIn: number;
    newRecord?: boolean;
    headquarters: string;
    registration?: Date
}
export const initDealer = (): Dealers => ( {
id: null, name: null, amountOfCars: 0, country: null, foundedIn: null, newRecord:true,  headquarters: null, registration:null
});