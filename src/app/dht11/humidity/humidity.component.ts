import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import {Paho} from 'ng2-mqtt/mqttws31';

@Component ({
  selector: 'app-humidity',
  templateUrl: './humidity.component.html',
  styleUrls: ['./humidity.component.scss'],
})
export class HumidityComponent implements OnInit {
  client: any;
  dht11Data: any = [];
  constructor(private menu: MenuController) {
  }

  getTemperature_Humidity() {
    this.client = new Paho.MQTT.Client('iot.eclipse.org', 443, 'dht11Humidity');
    this.onMessage();
    this.onConnectionLost();
    this.client.connect({onSuccess: this.onConnected.bind(this), useSSL: true});
  }

  onConnected() {
    console.log('Connected');
    this.client.subscribe('dht11/test');
  }

  onMessage() {
    this.client.onMessageArrived = (message: Paho.MQTT.Message) => {
      if (this.dht11Data.length !== 0)  {
        this.dht11Data.pop();
      }
      console.log('Message arrived : ' + message.payloadString );
      this.dht11Data.push(JSON.parse(message.payloadString));
      console.log(this.dht11Data);
    };
  }

  onConnectionLost() {
    // tslint:disable-next-line: ban-types
    this.client.onConnectionLost = (responseObject: Object) => {
      console.log('Connection lost : ' + JSON.stringify(responseObject));
    };
  }

  ngOnInit() {
    this.getTemperature_Humidity();
  }

}
