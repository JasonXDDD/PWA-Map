import { Component } from '@angular/core';
import { FirebaseMessageService } from './core/services/firebase-message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(private fcm: FirebaseMessageService) {}

  ngOnInit() {
    this.fcm.init()
  }
}
