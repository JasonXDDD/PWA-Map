import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './map.component';
import { ContentComponent } from './content/content.component';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { ToolComponent } from './tool/tool.component';
import { CoreModule } from '@app/core/core.module';

@NgModule({
  declarations: [MapComponent, ContentComponent, ToolComponent],
  imports: [
    CommonModule,
    MapRoutingModule,
    AgmCoreModule,
    AgmDirectionModule,
    CoreModule
  ]
})
export class MapModule { }
