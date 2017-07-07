import { Component, OnInit } from '@angular/core';
import { Hero } from './shared/Hero';
import { HeroDetalComponent } from './hero-detal/hero-detal.component';
import { HeroService } from './services/hero.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './style.css'],
  providers: [HeroService]
})
export class AppComponent implements OnInit {
  title = 'ToureOfHeroes';

  heroes: Hero[];
  selectHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
	  this.getHeroes();
	}

  getHeroes(): void {
	  this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

	onSelectHero(hero: Hero): void{
  	this.selectHero = hero;
  }

}
