import { Component, OnInit } from '@angular/core';
import { HeroService } from './services/hero.services';
import { HeroDetalComponent } from './hero-detal/hero-detal.component';
import { HeroesComponent } from './heroes/heroes.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './style.css']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
