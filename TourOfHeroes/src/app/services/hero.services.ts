import { Injectable } from '@angular/core';
import { HEROES } from '../shared/data';
import { Hero } from '../shared/Hero';

@Injectable()
export class HeroService{

	getHeroes(): Promise<Hero[]> {
		return Promise.resolve(HEROES);
	}

}