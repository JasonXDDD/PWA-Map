import { Injectable } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import * as firebase from 'firebase/app';
import 'firebase/messaging';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FirebaseMessageService {

  constructor(private swPush: SwPush) { }

  init() {
    firebase.initializeApp(environment.firebase);
    const messaging = firebase.messaging();

    navigator.serviceWorker.ready.then(registration => {
      if (
        !!registration &&
        registration.active &&
        registration.active.state &&
        registration.active.state === 'activated'
      ) {
        messaging.useServiceWorker(registration);
        messaging
          .requestPermission()
          .then(() => messaging.getToken())
          .then(token => console.log('Permission granted!', token));
      } else {
        console.warn(
          'No active service worker found, not able to get firebase messaging'
        );
      }
    });

    this.swPush.messages.subscribe(msg => {
      console.log(msg);
    });
  }
}