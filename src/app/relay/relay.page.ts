import { Component, OnInit } from '@angular/core';
import {Paho} from 'ng2-mqtt/mqttws31';
@Component({
  selector: 'app-relay',
  templateUrl: './relay.page.html',
  styleUrls: ['./relay.page.scss'],
})
export class RelayPage implements OnInit {

  client: any;
  public switch: boolean;
  constructor() {}

  connectionOn() {
    this.client = new Paho.MQTT.Client('iot.eclipse.org', 443, 'relay');
    this.onMessage();
    this.onConnectionLost();

    this.client.connect({onSuccess: this.onConnectedOn.bind(this), useSSL: true});
  }
  connectionOff() {
    this.client = new Paho.MQTT.Client('iot.eclipse.org', 443, 'relay');
    this.onMessage();
    this.onConnectionLost();

    this.client.connect({onSuccess: this.onConnectedOff.bind(this), useSSL: true});
  }
  ngOnInit() {
  }

  onOff() {
    if (this.switch === true) {
      console.log('on');
      this.connectionOn();
    } else {
      console.log('off');
      this.connectionOff();
    }
  }

  onConnectedOn() {
    console.log('Connected');
    this.client.subscribe('relay/switch');
    this.sendMessage('true');
  }
  onConnectedOff() {
    console.log('Connected');
    this.client.subscribe('relay/switch');
    this.sendMessage('false');
  }

  sendMessage(message: string) {
    const packet = new Paho.MQTT.Message(message);
    packet.destinationName = 'relay/switch';
    this.client.send(packet);
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
}
