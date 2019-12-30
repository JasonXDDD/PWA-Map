import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './map.component';
import { ContentComponent } from './content/content.component';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';

@NgModule({
  declarations: [MapComponent, ContentComponent],
  imports: [
    CommonModule,
    MapRoutingModule,
    AgmCoreModule,
    AgmDirectionModule
  ]
})
export class MapModule { }
