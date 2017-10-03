import { Component, OnInit, Input } from '@angular/core';
//import { ShopsService } from '../../services/shops.services';
import { HttpService } from '../../services/http.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.sass'],
  providers: [HttpService]
})
export class ShopsComponent implements OnInit {

  constructor(private http: HttpService) { }

  //@Input() shops;

  jsonShops = '../../../assets/img/shops.json';
  shops = [];

  ngOnInit() {
    this.http.get(this.jsonShops)
      .map(result => result.json())
      .subscribe(
        data => this.shops = data,
        error => console.log(error)
        );
  }

  // SHOPS = [
  // 	{
    // 		url: "../../../assets/img/shops/1.jpg",
    // 		name: "Магазин такой то 1",
    // 		desc: "Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты.",
    // 		adress: "г. Минск, ул. Ленина 189, кв.20"
    // 	},
    // 	{
      // 		url: "../../../assets/img/shops/2.jpg",
      // 		name: "Магазин такой то 2",
      // 		desc: "Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты.",
      // 		adress: "г. Минск, ул. Ленина 189, кв.23"
      // 	},
      // 	{
        // 		url: "../../../assets/img/shops/3.jpg",
        // 		name: "Магазин такой то 3",
        // 		desc: "Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты.",
        // 		adress: "г. Минск, ул. Ленина 189, кв.30"
        // 	},
        // 	{
          // 		url: "../../../assets/img/shops/4.jpg",
          // 		name: "Магазин такой то 4",
          // 		desc: "Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты.",
          // 		adress: "г. Минск, ул. Ленина 189, кв.4"
          // 	},
          // 	{
            // 		url: "../../../assets/img/shops/1.jpg",
            // 		name: "Магазин такой то 5",
            // 		desc: "Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты.",
            // 		adress: "г. Минск, ул. Ленина 189, кв.90"
            // 	},
            // 	{
              // 		url: "../../../assets/img/shops/2.jpg",
              // 		name: "Магазин такой то 6",
              // 		desc: "Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты.",
              // 		adress: "г. Минск, ул. Ленина 189, кв.70"
              // 	},
              // 	{
                // 		url: "../../../assets/img/shops/3.jpg",
                // 		name: "Магазин такой то 7",
                // 		desc: "Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты.",
                // 		adress: "г. Минск, ул. Ленина 189, кв.26"
                // 	}
                // ]

              }
