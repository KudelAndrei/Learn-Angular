import {GoogleMapsAPIWrapper} from '@agm/core/services/google-maps-api-wrapper';
import { Directive,  Input} from '@angular/core';
declare var google: any;

@Directive({
	selector: 'agm-map-directions'
})
export class DirectionsMapDirective {
	private _origin;
	private _destination;
	private _directionsDisplay;
	private _isLoad = false;
	private _serviceDistace;
	private _travel; // параметр тип маршрута

	@Input() set origin(value){
		this._origin = value; 
	};
	get origin(){
		return this._origin;
	};

	@Input() set destination(value){
		this._destination = value;
		this.OnRoute();
	};
	get destionation(){
		return this._destination;
	}

	@Input() set travel(travel){
		this._travel = travel;
		this.OnRoute();
	}
	get travel(){
		return this._travel;
	}

	constructor (private gmapsApi: GoogleMapsAPIWrapper) {  }

	ngOnInit(){	}

	// callback(response, status) {
 //  if (status == 'OK') {
 //    var origins = response.originAddresses;
 //    var destinations = response.destinationAddresses;
 //    var directionsDisplay = this._directionsDisplay;

 //    directionsDisplay.setDirections(response);

 //    for (var i = 0; i < origins.length; i++) {
 //      var results = response.rows[i].elements;
 //      for (var j = 0; j < results.length; j++) {
 //        var element = results[j];
 //        var distance = element.distance.text;
 //        var duration = element.duration.text;
 //        var from = origins[i];
 //        var to = destinations[j];
	//       }
	//     }
	//   }
	// }

	OnRoute(){
		this.gmapsApi.getNativeMap().then(map => {
			if (!this._isLoad){
				var options = {
					map: map,
					suppressMarkers: true
				}
				this._serviceDistace = new google.maps.DistanceMatrixService();
				this._directionsDisplay = new google.maps.DirectionsRenderer(options);
				// this._directionsDisplay.setMap(map);
				this._isLoad = true;
			}

			if (!this._origin || !this._destination)
				return;

			var originA = new google.maps.LatLng(this._origin.latitude, this._origin.longitude);
			var desctinationA = new google.maps.LatLng(this._destination.latitude, this._destination.longitude);
			
			var directionsService = new google.maps.DirectionsService;
			var directionsDisplay = this._directionsDisplay;

			directionsService.route({
				origin: {lat: this._origin.latitude, lng: this._origin.longitude},
				destination: {lat: this._destination.latitude, lng: this._destination.longitude},
				waypoints: [],
				optimizeWaypoints: true,
				travelMode: this._travel? this._travel : "DRIVING"
			}, function(response, status) {
				if (status === 'OK') {
					console.log(response);
					directionsDisplay.setDirections(response);
					directionsDisplay.setPanel(document.getElementById('setpanel'));
					document.getElementById('setpanel').style.display = 'block';
				} else {
					window.alert('Directions request failed due to ' + status);
				}
			});

			// this._serviceDistace.getDistanceMatrix(
			// {
			// 	origins: [originA],
			// 	destinations: [desctinationA],
			// 	travelMode: this._travel? this._travel : "DRIVING",
			// 	// transitOptions: TransitOptions,
			// 	// drivingOptions: DrivingOptions,
			// 	// unitSystem: UnitSystem,
			// 	avoidHighways: true,
			// 	avoidTolls: false,
			// }, this.callback);

		});
	}
}