import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.sass'],
  providers: [HttpService]
})
export class ShopsComponent implements OnInit {

  origin: any;
  destination: any;
  jsonShops = '../../../assets/data/shops.json';
  shops = [];

  constructor(private http: HttpService) { 
    this.getUserLocation();
  }

  loadData(type){
    this.http.get(this.jsonShops)
      .map(result => result.json())
      .concatMap(array => Observable.from(array))
      .filter(place =>{
       return place["type"] == type;
     })
      .toArray()
      .subscribe(
        data => this.shops = data,
        error => console.log(error)
      );
  }

  ngOnInit() {
    this.loadData('atm');
  }

  private getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.origin = position.coords;
      });
    }
  }

  public getRoute(marker){
    let location = {
      "latitude": marker.location.lat,
      "longitude": marker.location.lng
    };
    this.destination = location;
    console.log(this.destination);
  }

}
