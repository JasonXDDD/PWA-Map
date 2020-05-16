import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import * as Zdog from 'zdog';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'PWA-Map';
  isBuyNow = true;

  items: Observable<any[]>;
  constructor(private db: AngularFirestore, private router: Router) {
  }

  ngOnInit(): void {
    const self = this;
    // this.animateGlobal()
    this.items = this.db.collection('fruit').valueChanges();

    this.router.events.subscribe(async evt => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      else {
        console.log(evt.url)

        if(evt.url === '/map' || evt.url === '/tour'){
          self.isBuyNow = false;
        }
        else {
          self.isBuyNow = true;
        }
      }
    })

  }


}
