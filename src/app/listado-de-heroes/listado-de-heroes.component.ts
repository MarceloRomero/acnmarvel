import { Component, OnInit } from '@angular/core';
import { Heroe } from '../classes/heroe';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../services/heroes.service';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

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
    //this.getHeroeTest();
  }

  /*
  getHeroeTest(){
    this.heroesService
    .getHeroesTest(this.searchString, 1)
    .pipe(map( data=>({
      "total": data.data.total,
      "data" : data.data.results
    })))
    .subscribe(({total, data}) =>{
      console.log(total, data);
    })
  }
  */

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
