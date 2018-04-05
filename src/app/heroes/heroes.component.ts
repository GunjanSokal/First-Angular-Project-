
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';    //2nd display an object hero of Hero class.
// import { HEROES } from '../mock-heroes';   //Remove this as now we will get data from HeroService
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {


    ngOnInit() {
	  this.getHeroes();
	}

    //1.  hero = "Windstorm";         //1st displayed single string

	/*
	2.  hero : Hero{				  //2nd display an object hero of Hero class.
		id: 1,
	  	name:"Windstorm"
	};
	*/

	//3.  heroes = HEROES;			 //3rd display heroes of HEROES constant(mock-test)

	heroes: Hero[];				 //4th now we will get heroes from heroService using getHeroes()
									//instead of 3rd option (above this one)	

  	constructor(private heroService: HeroService) { }
	/*
	getHeroes(): void {               //It  assigns an array of heroes to the component's heroes property
	  this.heroes = this.heroService.getHeroes();
	}
	*/
	getHeroes(): void {
	  this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
	}

	/*
	selectedHero: Hero;				//As now detailed data is not displaying on..
	onSelect(hero: Hero): void {         //....clcking the list items
	  this.selectedHero = hero;
	}
	*/
}

