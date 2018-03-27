import {Ingridients} from '../recepies/ingridients';
export class Recepie {
  constructor(public name:string,public description:string,public imagePath,public ingridients:Ingridients[])
  {

  }
}
