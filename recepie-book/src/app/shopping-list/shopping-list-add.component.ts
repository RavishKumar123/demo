import { Component, OnChanges,Input,Output,EventEmitter } from '@angular/core';
import { Ingridients } from '../recepies/ingridients';
import {ShoppingListService} from './shopping-list.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html',
})
export class ShoppingListAddComponent implements OnChanges {
  @Input() items: Ingridients;
  @Output() cleared = new EventEmitter();
  isAdd = true;
  constructor(private sls:ShoppingListService) { }

  ngOnChanges(changes) {
    if(changes.items.currentValue === null)
    {
      this.isAdd = true;
      this.items = {name:null,amount:null}
    }else
    {
      this.isAdd = false;
    }
  }

  onSubmit(ings:Ingridients)
  {
    const newIng = new Ingridients(ings.name,ings.amount);
   if(!this.isAdd)
   {
     this.sls.editItem(this.items,newIng);
     this.onCLear();
   }else
   {
    this.items = newIng
    this.sls.addItem(this.items);
   }
  }
  onDelete()
  {
    this.sls.deleteItem(this.items);
    this.onCLear();
  }
  onCLear()
  {
    this.isAdd = true;
    this.cleared.emit(null);
  }

}
