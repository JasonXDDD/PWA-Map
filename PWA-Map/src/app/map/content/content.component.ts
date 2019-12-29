import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.sass']
})
export class ContentComponent implements OnInit {

  isOpen: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  animateContent(){
    if(this.isOpen){
      $('#content').animate({ height: 0 }, 300)
    }
    else {
      $('#content').animate({ height: '50vh' }, 300)
    }

    this.isOpen = !this.isOpen
  }


}
