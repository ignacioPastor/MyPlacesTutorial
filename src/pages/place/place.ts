import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { ViewController, NavParams } from 'ionic-angular';
import { Marker, CameraPosition, LatLng, MarkerOptions } from '@ionic-native/google-maps';


@IonicPage()
@Component({
  selector: 'page-place',
  templateUrl: 'place.html',
})
export class PlacePage {
  lat: number;
  lng: number;
  myTitle: string;

  myLatLng: LatLng;
  position: CameraPosition;
  markerOptions: MarkerOptions;
  marker: Marker;
  /*

  // create new marker
 let markerOptions: MarkerOptions = {
   position: ionic,
   title: 'Ionic'
 };

 const marker: Marker = map.addMarker(markerOptions)
   .then((marker: Marker) => {
      marker.showInfoWindow();
    });


  */
  constructor(private viewCtrl: ViewController,
    private navParams: NavParams) {
      this.lat = this.navParams.data.location.lat;
      this.lng = this.navParams.data.location.lng;
      this.myTitle = this.navParams.data.title;

      // this.myLatLng = new LatLng(this.lat, this.lng);

      // this.position = {
      //   target: this.myLatLng,
      //   zoom: 18,
      //   tilt: 30
      // };

      // this.markerOptions = {position: this.myLatLng, title: this.navParams.data.title}

      // this.myMap.addMarker(this.markerOptions).then((marker: Marker) => {
      //   marker.showInfoWindow();
      // });
  }

  onDismiss(){
    this.viewCtrl.dismiss();
  }


}
