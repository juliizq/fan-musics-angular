import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FansRoutingModule } from './fans-routing.module';
import { FanListComponent } from './fan-list/fan-list.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { FanFormComponent } from './fan-form/fan-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { FanDetailComponent } from './fan-detail/fan-detail.component';



@NgModule({
  declarations: [
    FanListComponent,
    FanFormComponent,
    FanDetailComponent,
    
  ],
  imports: [
    CommonModule,
    FansRoutingModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ]
})
export class FansModule { }
