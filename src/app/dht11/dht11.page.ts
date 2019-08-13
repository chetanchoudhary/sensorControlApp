import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-dht11',
  templateUrl: './dht11.page.html',
  styleUrls: ['./dht11.page.scss'],
})
export class Dht11Page implements OnInit {
  constructor(private menu: MenuController) {
  }

  ngOnInit() {}

}
