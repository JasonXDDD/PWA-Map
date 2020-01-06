import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.sass']
})
export class ContentComponent implements OnInit {

  isOpen: boolean = false;
  @Input() selectPoint;
  @Output() pointEvent = new EventEmitter<string>()

  constructor() { }

  ngOnInit() {
  }

  animateContent(){
    if(this.isOpen){
      $('#content').animate({ height: 0 }, 300)
      this.pointEvent.emit("close")
    }
    else {
      $('#content').animate({ height: '50vh' }, 300)
      this.pointEvent.emit("open")
    }

    this.isOpen = !this.isOpen
  }

  doNextPoint(){
    this.pointEvent.emit("next")
  }

  doPrevPoint(){
    this.pointEvent.emit("prev")
  }
}
