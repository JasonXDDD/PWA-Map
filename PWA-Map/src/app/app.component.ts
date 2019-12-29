import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import * as Zdog from 'zdog';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'PWA-Map';

  items: Observable<any[]>;
  constructor(private db: AngularFirestore) {
  }

  ngOnInit(): void {
    // this.animateGlobal()
    this.items = this.db.collection('fruit').valueChanges();
  }


}
