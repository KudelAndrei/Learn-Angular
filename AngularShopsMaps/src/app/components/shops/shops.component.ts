import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.sass'],
  providers: [HttpService]
})
export class ShopsComponent implements OnInit {
  lat: number;
  lng: number;
  jsonShops = '../../../assets/data/shops.json';
  shops = [];

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.get(this.jsonShops)
      .map(result => result.json())
      .subscribe(
        data => this.shops = data,
        error => console.log(error)
        );
    this.getUserLocation();
  }

  private getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    }
  }

}
