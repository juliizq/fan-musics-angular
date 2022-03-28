import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FanDetailComponent } from './fan-detail/fan-detail.component';
import { FanFormComponent } from './fan-form/fan-form.component';
import { FanListComponent } from './fan-list/fan-list.component';

const routes: Routes = [
  { path: '', component: FanListComponent },
  { path: 'new', component: FanFormComponent },
  { path: ':id', component: FanDetailComponent },
  { path: 'update/:id', component: FanFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FansRoutingModule { }
