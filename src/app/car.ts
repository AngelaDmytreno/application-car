import { stringify } from "@angular/compiler/src/util";

export interface Car {

    id: string;
    brand: string;
    model: string;
    year?: number;
    color: string;
    class: string;
    category: string;
    image: string;
    liked: boolean;
    newItem: boolean;
    description: string;
    wikilink: string;
    registration?: Date;
 
}
export const initCar = (): Car => ( {
  id: null, brand: null, model: null , year: 0, color: null, class: null,  category: null, image: null, liked: false,  newItem: false, description: null,
  wikilink: null, registration: null
  });