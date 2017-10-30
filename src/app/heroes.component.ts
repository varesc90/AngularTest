import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
import {Router} from '@angular/router';



@Component({

    selector: 'my-heroes',
    styleUrls: ['./heroes.component.css',],
    templateUrl: './heroes.component.html',
    providers: [],
})
export class HeroesComponent implements OnInit{
    selectedHero: Hero;

    heroes: Hero[];
    ngOnInit(): void {
        this.getHeroes();
    }
    constructor(private heroService: HeroService,
                private  router: Router) { }
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }

}
