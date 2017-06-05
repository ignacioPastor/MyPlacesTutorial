import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { NewPlacePage } from "../new-place/new-place";
import { PlacePage } from "../place/place";
import { PlacesServices } from '../../services/places.service';
import { Place } from '../../model/place.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  entryComponents:[ PlacePage ]
})
export class HomePage {
  places: {title: string}[] = [];

  constructor(public navCtrl: NavController,
   private placesService: PlacesServices,
   private modalCtrl: ModalController) {

  }

  // Function about life cicle
  ionViewWillEnter(){
    this.placesService.getPlaces().then(places => {
      this.places = places;
    });
  }

  onLoadNewPlace(){
    this.navCtrl.push(NewPlacePage);
  }

  onOpenPlace(place: Place){
    this.modalCtrl.create(PlacePage, place).present();
  }
}
