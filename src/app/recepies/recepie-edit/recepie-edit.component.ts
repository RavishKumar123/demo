import { Component, OnInit,OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs/Rx';
import {ActivatedRoute,Router} from '@angular/router';
import { RecepieService} from '../recepie.service';
import {Recepie} from '../recepie';
import {FormArray,FormGroup,FormControl,Validators,FormBuilder} from  '@angular/forms';

@Component({
  selector: 'rb-recepie-edit',
  templateUrl: './recepie-edit.component.html',
  styles: []
})
export class RecepieEditComponent implements OnInit , OnDestroy {
  recepieForm: FormGroup;
  private recepieIndex:number;
  private sub: Subscription;
  private recepie: Recepie;
  private isNew = true;

  constructor(private rt:Router, private acr:ActivatedRoute,private recepieService:RecepieService,private fb:FormBuilder){}

  ngOnInit() {

    this.sub = this.acr.params.subscribe(
      (param: any) => {
        if(param.hasOwnProperty('id'))
        {
          this.isNew = false;
          this.recepieIndex = +param['id'];
          this.recepie = this.recepieService.getRecepeies(this.recepieIndex);
        }else
        {
          this.isNew = true;
        }
               }
             );
            // console.log(//isNew);
            this.initForm();
  }
  ngOnDestroy()
  {
    this.sub.unsubscribe();
  }

  private initForm()
  {
    let recepieName = '';
    let recepieImage = '';
    let recepieContent = '';
    let recepieIngrident: FormArray  = new FormArray([]);
   if(!this.isNew)
   {
     for(let i = 0; i < this.recepie.ingridients.length; ++i)
     {
       recepieIngrident.push(
         new FormGroup({
           name: new FormControl(this.recepie.ingridients[i].name,Validators.required),
           amount: new FormControl(this.recepie.ingridients[i].amount,[Validators.required,Validators.pattern("\\d+")])
         })
       )
       recepieName = this.recepie.name;
       recepieImage = this.recepie.imagePath;
       recepieContent = this.recepie.description;
     }
   }
   this.recepieForm = this.fb.group({
     name: [recepieName,Validators.required],
     imagePath: [recepieImage,Validators.required],
     description: [recepieContent,Validators.required],
     ingridients: recepieIngrident

   });

  }

  onSubmit()
  {
    const newRecepie = this.recepieForm.value;
    if(this.isNew)
    {
      this.recepieService.addRecepie(newRecepie);
    }else
    {
      this.recepieService.editRecepie(this.recepie,newRecepie);
    }
    this.navigateBack();
  }

  private navigateBack()
  {
    this.rt.navigate(['../']);
  }
  onCancel()
  {
    this.navigateBack();
  }
  onRemove(num: number)
  {
    (<FormArray>this.recepieForm.controls['ingridients']).removeAt(num);
  }
  onAddItem(name:string,amount:string)
  {
    (<FormArray>this.recepieForm.controls['ingridients']).push(
      new FormGroup({
        name: new FormControl(name,Validators.required),
        amount : new FormControl(amount,[Validators.required,Validators.pattern('\\d+')])
      })
    );
  }


}
