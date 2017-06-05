import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlacesServices } from '../../services/places.service';
import { Geolocation } from '@ionic-native/geolocation';

@IonicPage()
@Component({
	selector: 'page-new-place',
	templateUrl: 'new-place.html'
})
export class NewPlacePage {
	// location: {lat: number, lng: number} = {lat: 0, lng: 0};
	location: {lat: number, lng: number} = {lat: null, lng: null};

	constructor(private placesService: PlacesServices,
		private navCtrl: NavController,
		private geolocation: Geolocation) {
	}

	ionViewWillEnter(){
		this.geolocation.getCurrentPosition().then(location => {
			this.location.lat = location.coords.latitude;
			this.location.lng = location.coords.longitude;
		}).catch(error => {
			console.error("Error getting currentPosition: " + error);
		});
	}

	onAddPlace(value: { title: string}){
		this.placesService.addPlace({title: value.title, location: this.location});
		this.navCtrl.pop();
		
	}

}
