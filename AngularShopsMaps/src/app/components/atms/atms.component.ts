import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-atms',
  templateUrl: './atms.component.html',
  styleUrls: ['./atms.component.sass'],
  providers: [HttpService]
})
export class AtmsComponent implements OnInit {
  lng = 59.87903;
  lat = 59.879037;

  constructor(private http: HttpService) { }

  jsonAtm = '../../../assets/data/atms.json';
  atms = [];

  ngOnInit() {
    this.http.get(this.jsonAtm)
      .map(result => result.json())
      .subscribe(
        data => this.atms = data,
        error => console.log(error)
        );
  }
  
}
