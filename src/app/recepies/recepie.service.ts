import { Injectable,EventEmitter } from '@angular/core';
import {Recepie} from './recepie';
import {Ingridients} from './ingridients';
import {Http,Headers,Response,HttpModule} from '@angular/http'
import 'rxjs/Rx';

@Injectable()
export class RecepieService {
  recepiesChanged = new EventEmitter<Recepie[]>();
private recepies: Recepie[] = [
  new Recepie('Biryani','Biryani','http://i.ndtvimg.com/i/2016-06/biryani_625x350_71466587674.jpg',[
    new Ingridients('fries', '2'),
    new Ingridients('condom', '3')
  ]),
  new Recepie('Shahrugh','My name is khan','https://upload.wikimedia.org/wikipedia/commons/4/44/Shahrukh_interacts_with_media_after_KKR%27s_maiden_IPL_title.jpg',[
    new Ingridients('kajol', '2'),
    new Ingridients('fizza', '3')
  ]),
];
  constructor(private ht:Http) { }
  getRecepeie()
  {
    return this.recepies;
  }
  getRecepeies(id:number)
  {
    return this.recepies[id];
  }
  deleteRecepie(rec:Recepie)
  {
    this.recepies.splice(this.recepies.indexOf(rec), 1);
  }
  addRecepie(rec:Recepie)
  {
    this.recepies.push(rec);
  }
  editRecepie(oldRec:Recepie,newRec:Recepie)
  {
    this.recepies[this.recepies.indexOf(oldRec)] = newRec;
  }

  storeData()
  {
   const body = JSON.stringify(this.recepies);
   const head = new Headers({
     'Content-Type':'Application/json'
    });
    return this.ht.put('https://recepie-book-1b015.firebaseio.com/recepies.json',body,{headers: head });
  }
  fetchData()
  {
  return this.ht.get('https://recepie-book-1b015.firebaseio.com/recepies.json')
  .map((response:Response) => response.json()).
  subscribe(
    (data: Recepie[]) => {
      this.recepies = data;
      this.recepiesChanged.emit(this.recepies);
    }
  );
  }

}
