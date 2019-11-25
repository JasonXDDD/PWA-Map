import { Component, OnInit } from '@angular/core';
import { FirebaseMessageService } from './core/services/firebase-message.service';
import * as Zdog from 'zdog';
import { FirebaseFirestoreService } from './core/services/firebase-firestore.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private fcm: FirebaseMessageService, private ffs: FirebaseFirestoreService) { }

  ngOnInit() {
    // this.fcm.init()
    this.animateGlobal()
  }

  animateGlobal() {
    /*-- Made with Zdog --*/

    // setting up Zdog illustration element
    const illoElem = document.querySelector('.illo');
    const illoSize = 50;
    const minWindowSize = Math.min(window.innerWidth - 20, window.innerHeight - 60);
    const zoom = Math.floor((minWindowSize / illoSize) * 0.75);
    illoElem.setAttribute('width', String(illoSize * zoom));
    illoElem.setAttribute('height', String(illoSize * zoom));

    // Zdog math variables
    const TAU = Zdog.TAU;

    // boolean flag for spin
    let isSpinning = true;

    // illustration base
    const illo = new Zdog.Illustration({
      element: illoElem,
      zoom: zoom,
      dragRotate: false, //edit
      onDragStart: function () {
        isSpinning = false;
      },
      rotate: { y: TAU / 4 }
    });

    // frontside earth
    const head = new Zdog.Hemisphere({
      addTo: illo,
      diameter: 40,
      stroke: false,
      color: '#1976B5',
    });

    // backside earth
    new Zdog.Hemisphere({
      addTo: head,
      diameter: 40,
      stroke: false,
      color: '#105AAA',
      rotate: { x: TAU / 2 }
    });

    // light green lands
    const land1 = new Zdog.Shape({
      path: [
        { x: 0, y: 0, z: 0 },
        { x: -2, y: 0, z: 5 },
      ],
      translate: { x: 17, y: 5, z: 4 },
      color: "#6FCC50",
      closed: false,
      fill: true,
      stroke: 7,
      addTo: head,
    });
    land1.copy({
      scale: { x: -1 },
      translate: { x: -17, y: 0, z: 4 },
    })

    const land2 = new Zdog.Shape({
      path: [
        { x: 0, y: 0, z: 0 },
        { x: -10, y: 0, z: 4 },
      ],
      translate: { x: 13, y: -10, z: 10 },
      color: "#6FCC50",
      closed: false,
      fill: true,
      stroke: 7,
      addTo: head,
    });

    new Zdog.Shape({
      path: [
        { x: 0, y: 0, z: 0 },
        { x: 5, y: 0, z: 4 },
      ],
      translate: { x: -13, y: -10, z: 10 },
      color: "#6FCC50",
      closed: false,
      fill: true,
      stroke: 7,
      addTo: head,
    });

    const land3 = new Zdog.Shape({
      path: [
        { x: 0, y: 0, z: 0 },
        { x: -2, y: 0, z: 3 },
      ],
      translate: { x: 13, y: 13, z: 7 },
      color: "#6FCC50",
      closed: false,
      fill: true,
      stroke: 4,
      addTo: head,
    });
    land3.copy({
      scale: { x: -1 },
      translate: { x: -13, y: 13, z: 7 },
    })

    const land4 = new Zdog.Shape({
      path: [
        { x: 0, y: 0, z: 0 },
        { x: -7, y: 0, z: 3 },
      ],
      translate: { x: 10, y: -3, z: 16 },
      color: "#6FCC50",
      closed: false,
      fill: true,
      stroke: 4,
      addTo: head,
    });
    land4.copy({
      scale: { x: -1 },
      translate: { x: -10, y: 3, z: 16 },
    })

    // light clouds
    const cloud1 = new Zdog.Shape({
      path: [
        { x: 0, y: 0, z: 0 },
        { x: -2, y: 0, z: 5 },
      ],
      translate: { x: 20, y: 7, z: 4 },
      color: "#fff",
      closed: false,
      fill: true,
      stroke: 5,
      addTo: head,
    });

    new Zdog.Shape({
      path: [
        { x: 0, y: 0, z: 0 },
        { x: 3, y: 0, z: 1 },
      ],
      translate: { x: -5, y: 7, z: 20 },
      color: "#fff",
      closed: false,
      fill: true,
      stroke: 5,
      addTo: head,
    });

    const cloud2 = new Zdog.Shape({
      path: [
        { x: 0, y: 0, z: 0 },
        { x: -5, y: 0, z: 10 },
      ],
      translate: { x: 23, y: 2, z: 4 },
      color: "#fff",
      closed: false,
      fill: true,
      stroke: 4,
      addTo: head,
    });
    cloud2.copy({
      scale: { x: -1 },
      translate: { x: -23, y: 2, z: 4 },
    })

    const cloud3 = new Zdog.Shape({
      path: [
        { x: 0, y: 0, z: 0 },
        { x: -2, y: 0, z: 5 },
      ],
      translate: { x: 20, y: -2, z: 7 },
      color: "#fff",
      closed: false,
      fill: true,
      stroke: 2,
      addTo: head,
    });
    cloud3.copy({
      scale: { x: -1 },
      translate: { x: -20, y: -2, z: 7 },
    })

    const cloud4 = new Zdog.Shape({
      path: [
        { x: 0, y: 0, z: 0 },
        { x: -2, y: 0, z: 5 },
      ],
      translate: { x: 18, y: -10, z: 7 },
      color: "#fff",
      closed: false,
      fill: true,
      stroke: 3,
      addTo: head,
    });
    cloud4.copy({
      scale: { x: -1 },
      translate: { x: -18, y: -10, z: 7 },
    })

    // dark clouds
    const cloud5 = new Zdog.Shape({
      path: [
        { x: 0, y: 0, z: 0 },
        { x: 0, y: 0, z: -3 },
      ],
      translate: { x: 20, y: -8, z: -3 },
      color: "#A6B3DA",
      closed: false,
      fill: true,
      stroke: 3,
      addTo: head,
    });
    cloud5.copy({
      scale: { x: -1 },
      translate: { x: -20, y: -8, z: -3 },
    })

    const cloud6 = new Zdog.Shape({
      path: [
        { x: 0, y: 0, z: 0 },
        { x: -4, y: 0, z: -7 },
      ],
      translate: { x: 20, y: 0, z: -8 },
      color: "#A6B3DA",
      closed: false,
      fill: true,
      stroke: 6,
      addTo: head,
    });
    cloud6.copy({
      scale: { x: -1 },
      translate: { x: -20, y: 0, z: -8 },
    })

    const cloud7 = new Zdog.Shape({
      path: [
        { x: 0, y: 0, z: 0 },
        { x: -3, y: 0, z: -3 },
      ],
      translate: { x: 15, y: 15, z: -8 },
      color: "#A6B3DA",
      closed: false,
      fill: true,
      stroke: 3,
      addTo: head,
    });
    cloud7.copy({
      scale: { x: -1 },
      translate: { x: -15, y: 15, z: -8 },
    })

    new Zdog.Shape({
      path: [
        { x: 0, y: 0, z: 0 },
        { x: -5, y: 0, z: 0 },
      ],
      translate: { x: -5, y: -4, z: -18 },
      color: "#A6B3DA",
      fill: true,
      stroke: 8,
      addTo: head,
    });

    // dark green lands
    const land5 = new Zdog.Shape({
      path: [
        { x: 0, y: 0, z: 0 },
        { x: 2.5, y: 0, z: 2 },
      ],
      translate: { x: 7, y: 7, z: -16 },
      color: "#489268",
      fill: true,
      stroke: 4,
      addTo: head,
    });
    land5.copy({
      scale: { x: -1 },
      translate: { x: -7, y: 12, z: -16 },
    })

    const land6 = new Zdog.Shape({
      path: [
        { x: 0, y: 0, z: 0 },
        { x: 10, y: 0, z: 9 },
      ],
      translate: { x: 5, y: -2, z: -17 },
      color: "#489268",
      fill: true,
      stroke: 8,
      addTo: head,
    });

    const land7 = new Zdog.Shape({
      path: [
        { x: 0, y: 0, z: 0 },
        { x: 2.5, y: 0, z: 5 },
      ],
      translate: { x: 13, y: -10, z: -10 },
      color: "#489268",
      fill: true,
      stroke: 4,
      addTo: head,
    });
    land5.copy({
      scale: { x: -1 },
      translate: { x: -13, y: -10, z: -10 },
      stroke: 5,
    })


    // spinning animation
    function animate() {
      illo.rotate.y += isSpinning ? -0.01 : 0;
      illo.updateRenderGraph();
      requestAnimationFrame(animate);
    }

    animate();
  }
}
