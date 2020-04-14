import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerService } from './services/server.service';
import { HttpClientModule } from '@angular/common/http';
import { LimitPipe } from './pipe/limit.pipe';
import { AfsService } from './services/afs.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [LimitPipe],
  exports: [LimitPipe],

  providers: [
    ServerService,
    AfsService
  ]
})
export class CoreModule { }
