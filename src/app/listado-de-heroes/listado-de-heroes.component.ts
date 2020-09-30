import { Component, OnInit } from '@angular/core';
import { Heroe } from '../classes/heroe';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../services/heroes.service';

@Component({
  selector: 'app-listado-de-heroes',
  templateUrl: './listado-de-heroes.component.html',
  styleUrls: ['./listado-de-heroes.component.css']
})
export class ListadoDeHeroesComponent implements OnInit {
  
  //public heroes: Array<Heroe> = [];
  public title = 'Tutorial de Angular - Héroes de Marvel';
  public searchString : string;

  constructor(
    public heroesService: HeroesService
  ) { }

  ngOnInit(): void {
    this.heroesService.getHeroes();
  }

  submitSearch() {
    this.heroesService.getHeroes(this.searchString);
  }

  prevPage() {
    this.heroesService.getHeroes(this.searchString, this.heroesService.page - 1);
  }

  nextPage() {
    this.heroesService.getHeroes(this.searchString, this.heroesService.page + 1);
  }
}
