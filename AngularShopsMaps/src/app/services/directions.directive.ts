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

  constructor (private gmapsApi: GoogleMapsAPIWrapper) {  }

  ngOnInit(){
    // this.gmapsApi.getNativeMap().then(map => {
    //   this._directionsDisplay = new google.maps.DirectionsRenderer;
    //   this._directionsDisplay.setMap(map);
    //   this._isLoad = true;
    // });
  }

  OnRoute(){
    this.gmapsApi.getNativeMap().then(map => {
      if (!this._isLoad){
        this._directionsDisplay = new google.maps.DirectionsRenderer;
        this._directionsDisplay.setMap(map);
        this._isLoad = true;
      }

      if (!this._origin || !this._destination)
        return;

      var directionsService = new google.maps.DirectionsService;
      var directionsDisplay = this._directionsDisplay

      directionsService.route({
        origin: {lat: this._origin.latitude, lng: this._origin.longitude},
        destination: {lat: this._destination.latitude, lng: this._destination.longitude},
        waypoints: [],
        optimizeWaypoints: true,
        travelMode: 'DRIVING'
      }, function(response, status) {
        if (status === 'OK') {
          directionsDisplay.setDirections(response);
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      });

    });
  }
}