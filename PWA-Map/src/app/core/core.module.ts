import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerService } from './services/server.service';
import { HttpClientModule } from '@angular/common/http';
import { LimitPipe } from './pipe/limit.pipe';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [LimitPipe],
  exports: [LimitPipe],

  providers: [
    ServerService
  ]
})
export class CoreModule { }
