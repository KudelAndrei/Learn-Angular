import { Component, OnInit } from '@angular/core';
import { Hero } from '../shared/Hero';
import { HeroDetalComponent } from '../hero-detal/hero-detal.component';
import { HeroService } from '../services/hero.services';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
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
    console.log(this.selectHero);
  }

}
