import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { PartnerlistComponent } from './partnerlist/partnerlist.component';
import { TouristListComponent } from './tourist-list/tourist-list.component';
import { AddTouristComponent } from './add-tourist/add-tourist.component';

const routes: Routes = [
  { path: '', redirectTo: 'view-tourist', pathMatch: 'full' },
  { path: 'view-tourist', component: TouristListComponent },
  { path: 'add-tourist', component: AddTouristComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
