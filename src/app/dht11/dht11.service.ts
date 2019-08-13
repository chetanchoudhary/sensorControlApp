import { Injectable, OnDestroy } from '@angular/core';

import {Paho} from 'ng2-mqtt/mqttws31';




@Injectable({
  providedIn: 'root'
})
export class Dht11Service {
  client;
  private temperature: any;
  private humidity: number;
  // url = 'https://pp-1907241102nj.devportal.ptc.io/Thingworx/Things/DHT11/properties/Temperature';

  constructor() {
    this.client = new Paho.MQTT.Client('iot.eclipse.org', 443, 'dht11');
    this.temperature = this.onMessage();
    console.log("in constructor: " + this.temperature);
    this.onConnectionLost();
    this.client.connect({onSuccess: this.onConnected.bind(this), useSSL: true});
    // this.temperature = 25;
    this.humidity = 50;
  }

  onConnected() {
    console.log('Connected');
    this.client.subscribe('dht11/temperature');
    // this.sendMessage('HelloWorld');
  }

  onMessage() {
    this.client.onMessageArrived = (message: Paho.MQTT.Message) => {
      console.log('Message arrived : ' + message.payloadString);
    };
  }

  onConnectionLost() {
    this.client.onConnectionLost = (responseObject: Object) => {
      console.log('Connection lost : ' + JSON.stringify(responseObject));
    };
  }
  getTemperture() {
    console.log(this.temperature);
    return this.temperature;
  }
  getHumidity() {
    return this.humidity;
  }

}



