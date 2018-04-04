import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
//As now Hero details will be fetched by getting the id from URL and hero-service directly.
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService }  from '../hero.service';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  	constructor(
	  private route: ActivatedRoute,
	  private heroService: HeroService,
	  private location: Location
	) {}

 	ngOnInit(): void {
	  this.getHero();
	}

	//Point:-Extract the id route parameter

	getHero(): void {
	  const id = +this.route.snapshot.paramMap.get('id');
	  this.heroService.getHero(id).subscribe(hero => this.hero = hero);
	}
	goBack(): void {
	  this.location.back();
	}

	@Input() hero: Hero;
	
}