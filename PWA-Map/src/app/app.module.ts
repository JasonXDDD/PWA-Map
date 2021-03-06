import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { ServiceWorkerModule, SwUpdate } from '@angular/service-worker';

import { AngularFireModule } from '@angular/fire';
import { environment } from '@env/environment';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AgmCoreModule } from '@agm/core';
import { CoreModule } from '@app/core/core.module';
import { MapStyle } from '@app/core/data/map_style';
import { HeaderComponent } from './layout/header/header.component';
import { BuynowComponent } from './layout/buynow/buynow.component';
import { HttpClientModule } from '@angular/common/http';
import { TabbarComponent } from './layout/tabbar/tabbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BuynowComponent,
    TabbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireMessagingModule,

    AgmCoreModule.forRoot({
      apiKey: environment.gmap,
      libraries: ['places', 'geometry'],
      language: 'zh-TW'
    }),

    AngularFireModule.initializeApp(environment.firebase),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule,
    CoreModule
  ],
  providers: [MapStyle],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private swUpdate: SwUpdate) {
    if (swUpdate.isEnabled) {
      swUpdate.available.subscribe(() => {
        if (confirm('New version available. Load New Version?')) {
          window.location.reload();
        }
      });
    }
  }
}
