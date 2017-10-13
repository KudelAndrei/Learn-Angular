import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { HttpService } from '../../services/http.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-shopdescription',
	templateUrl: './shopdescription.component.html',
	styleUrls: ['./shopdescription.component.sass'],
	providers: [HttpService]
})
export class ShopDescriptionComponent implements OnInit {
	shopeDescr: any;
	subscription: Subscription;

	thisShop = "../../../assets/data/shops.json";

	constructor(
		private http: HttpService,
		private router: Router,
		route: ActivatedRoute ) {
		this.subscription = route.params.subscribe( params => this.LoadDescription( params['id'] ))
	}

	ngOnInit() {
	}

	/**
		 * Loads shop description by id, if id is wrong then redirect to homepage
		 *
		 * @param {number} id shop id
		 *
		 * @memberOf ShopDescriptionComponent
	*/
	LoadDescription(id: number): void {
		this.http.get(this.thisShop)
		.map(result => result.json())
		.concatMap(array => Observable.from(array))
			.filter(shop =>{
				return shop["id"] == id;
		})
			.toArray()
			.subscribe(
				data => this.shopeDescr = data,
				error => {
								console.log(error);
								this.router.navigate(['shops']);
						}
			);
	}

	 ngOnDestroy() {
		this.subscription.unsubscribe();
	 }

}
