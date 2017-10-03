import { Injectable } from '@angular/core';
import { 'rxjs/add/operator/map' };

@Injectable()
export class ShopsService {

	constructor (private http: Http) {}

	getShops() {
		return this.http.get('../data/shops.json')
			.map(function(response){
				return response.json();
			})
			.map(response => response.results)
			.map(shops = > {
				return shops.map(shop => {
					return {
						name: shop.name,
						url: shop.url
					}
				})
			})
	}

}