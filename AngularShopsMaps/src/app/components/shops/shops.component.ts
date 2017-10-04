import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import 'rxjs/add/operator/map';
//import { DirectionsMapDirective } from '../../directives/geo.directive';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.sass'],
  providers: [HttpService]
})
export class ShopsComponent implements OnInit {
  lat: number = 53.9;
  lng: number = 27.6;
  zoom: number = 10;

  constructor(private http: HttpService) { }

  jsonShops = '../../../assets/data/shops.json';
  shops = [];

  ngOnInit() {
    this.http.get(this.jsonShops)
      .map(result => result.json())
      .subscribe(
        data => this.shops = data,
        error => console.log(error)
        );
  }

}
