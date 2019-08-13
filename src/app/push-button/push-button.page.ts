import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import {Paho} from 'ng2-mqtt/mqttws31';

@Component({
  selector: 'app-push-button',
  templateUrl: './push-button.page.html',
  styleUrls: ['./push-button.page.scss'],
})
export class PushButtonPage implements OnInit {
  client: any;
  count: any = [];

  constructor(private menu: MenuController) {
    this.getCount();
  }
  getCount() {
    this.client = new Paho.MQTT.Client('iot.eclipse.org', 443, 'pushButton');
    this.onMessage();
    this.onConnectionLost();
    this.client.connect({onSuccess: this.onConnected.bind(this), useSSL: true});
  }
  onConnected() {
    console.log('Connected');
    this.client.subscribe('pushButton/count');
  }

  onMessage() {
    this.client.onMessageArrived = (message: Paho.MQTT.Message) => {
      if (this.count.length !== 0)  {
        this.count.pop();
      }
      console.log('Message arrived : ' + message.payloadString);
      this.count.push(message.payloadString);
      console.log(this.count);
    };
  }
  onConnectionLost() {
    this.client.onConnectionLost = (responseObject: Object) => {
      console.log('Connection lost : ' + JSON.stringify(responseObject));
    };
  }

  ngOnInit() {}

}

