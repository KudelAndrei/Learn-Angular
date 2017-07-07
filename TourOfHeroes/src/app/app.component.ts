import { Component } from '@angular/core';
import { Hero } from './shared/Hero';
import { HEROES } from './shared/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './style.css']
})
export class AppComponent {
  title = 'Kudel';

  heroes = HEROES;
  selectHero: Hero;

  onSelectHero(hero: Hero): void{
  	this.selectHero = hero;
  	console.log(hero);
  }

}
