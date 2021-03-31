import { stringify } from "@angular/compiler/src/util";

export interface Car {

    id: string,
    brand: string,
    model: string,
    year: number,
    color: string,
    class: string,
    category: string,
    image: string,
    liked: boolean,
    newItem: boolean,
    description: string,
    wikilink: string,
 
}
export const initCar = (): Car => ( {
  id:'', brand: '', model: '', year: 0, color: '', class: '',  category: '', image: '', liked: false,  newItem: false, description: '',
  wikilink: '',
  });