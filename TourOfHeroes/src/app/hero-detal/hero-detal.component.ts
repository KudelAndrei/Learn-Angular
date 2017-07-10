import { Component, OnInit, Input } from '@angular/core';
import { HeroService } from '../services/hero.services';
import { Hero } from '../shared/Hero';

@Component({
  selector: 'app-hero-detal',
  templateUrl: './hero-detal.component.html',
  styleUrls: ['./hero-detal.component.css']
})
export class HeroDetalComponent implements OnInit {

	@Input() hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}
