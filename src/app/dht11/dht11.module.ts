import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Dht11Page } from './dht11.page';

import { HumidityComponent } from './humidity/humidity.component';

const routes: Routes = [
  {
    path: '',
    component: Dht11Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Dht11Page, HumidityComponent]
})
export class Dht11PageModule {}
