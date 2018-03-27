import {Ingridients} from '../recepies/ingridients'
export class ShoppingListService {
  private items: Ingridients[] = [];
  constructor() { }
 getItems()
 {
   return this.items;
 }
 addItems(items: Ingridients[])
 {
   Array.prototype.push.apply(this.items, items);
 }
 addItem(item: Ingridients)
 {
   this.items.push(item);
 }
 editItem(oldItem:Ingridients,newItem:Ingridients)
 {
   this.items[this.items.indexOf(oldItem)] = newItem;
 }
 deleteItem(item: Ingridients)
 {
   this.items.splice(this.items.indexOf(item),1);
 }
}
