import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  logo = 'AngularShopsMap';

  lat: number = 51.678418;
  lng: number = 7.809007;
}
