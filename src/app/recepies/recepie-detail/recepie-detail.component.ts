import { Component, OnInit,OnDestroy } from '@angular/core';
import { Recepie} from '../recepie';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {Router,ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Rx'
import {RecepieService} from '../recepie.service';

@Component({
  selector: 'rb-recepie-detail',
  templateUrl: './recepie-detail.component.html',
})
export class RecepieDetailComponent implements OnInit, OnDestroy {
  selectRecepies: Recepie;
  private recepieIndex:number;
  private sub:Subscription;

  constructor(
              private sls:ShoppingListService,
              private router:Router,
              private acr:ActivatedRoute,
              private recepieServies:RecepieService
            ){ }

  ngOnInit() {
this.sub = this.acr.params.subscribe(
  (param:any) => {
    this.recepieIndex = param['id'];

      this.selectRecepies = this.recepieServies.getRecepeies(this.recepieIndex);
}
);
  }
  ngOnDestroy()
  {

    this.sub.unsubscribe();
  }
  onEdit()
  {
   this.router.navigate(['/recepie',this.recepieIndex,'edit']);
  }
onDelete()
{
  this.router.navigate(['/recepie']);
    this.recepieServies.deleteRecepie(this.selectRecepies);
}
  addRecepies()
  {
   this.sls.addItems(this.selectRecepies.ingridients);
  }
}
