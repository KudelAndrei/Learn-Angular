import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import { Observable } from 'rxjs';


@Component({
	selector: 'app-shops',
	templateUrl: './shops.component.html',
	styleUrls: ['./shops.component.sass'],
	providers: [HttpService]
})
export class ShopsComponent implements OnInit {

	origin: any;
	destination: any;
	travel: any;
	jsonShops = '../../../assets/data/shops.json';
	shops = [];
	url = window.location.pathname;

	constructor(private http: HttpService, private router: Router) { 
		this.getUserLocation();
	}

	ngOnInit() {
		if (this.url == '/atms'){
			this.loadData('atm');
		} else this.loadData('shop');
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
	}

	getTravel(travel){
		this.travel = travel;
	}

	clickShop(shop){
		this.router.navigate(['shops', shop.id]);
	}

}
