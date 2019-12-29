import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './map.component';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [MapComponent, ContentComponent],
  imports: [
    CommonModule,
    MapRoutingModule
  ]
})
export class MapModule { }
