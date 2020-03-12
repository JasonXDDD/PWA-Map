import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.sass']
})
export class ToolComponent implements OnInit {

  private _isOpen;

  get isOpen(): any {
    return this._isOpen;
  }

  @Input()
  set isOpen(val: any) {
    this.animatePosition(val);
    this._isOpen = val;
  }

  @Input() tourList: any[];
  @Output() pointEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  selectItem(id){
    this.pointEvent.emit(id)
  }

  animatePosition(val) {
    if (val) {
      $('#schedule').animate({ bottom: '75vh' }, 300);
    } else {
      $('#schedule').animate({ bottom: '25vh' }, 300);
    }
  }

}
