import { Component, OnInit } from '@angular/core';
import { AfsService } from '@app/core/services/afs.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.sass']
})
export class StoreComponent implements OnInit {

  data: Observable<any>;
  constructor(private afs: AfsService) { }

  async ngOnInit() {
    this.data = await this.afs.doGetTourList()
  }

}
