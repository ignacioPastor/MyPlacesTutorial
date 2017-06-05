import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PlacePage } from '../pages/place/place';
import { NewPlacePage } from '../pages/new-place/new-place';
import { PlacesServices } from '../services/places.service';
import { IonicStorageModule  } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { GoogleMaps } from '@ionic-native/google-maps';
import { MyData } from '../myData';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewPlacePage,
    PlacePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: MyData.GOOGLE_API_KEY
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewPlacePage,
    PlacePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PlacesServices,
    Geolocation,
    GoogleMaps
  ]
})
export class AppModule {}
