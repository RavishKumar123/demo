import {Routes} from '@angular/router';
import {RecepieStartComponent} from './recepie-start.component'
import {RecepieDetailComponent} from './recepie-detail/recepie-detail.component'
import {RecepieEditComponent} from './recepie-edit/recepie-edit.component';
export const RECEPIE_ROUTE:Routes = [
  {path: '',component:RecepieStartComponent},
  {path: 'new',component:RecepieEditComponent},
  {path: ':id',component:RecepieDetailComponent},
  {path: ':id/edit', component:RecepieEditComponent}
];
