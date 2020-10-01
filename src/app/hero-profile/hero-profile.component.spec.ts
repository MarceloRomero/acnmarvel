import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import {AppComponent} from '../app.component';
import { HeroProfileComponent } from './hero-profile.component';
import {ModalPollComponent} from '../modal-poll/modal-poll.component';
import {RouterTestingModule} from '@angular/router/testing';
import { Heroservicemock } from '../classes/heroservicemock';
import {HeroesService} from '../services/heroes.service';
import {getTestBed, ComponentFixtureAutoDetect} from "@angular/core/testing";
import { of } from 'rxjs';
import { delay } from 'rxjs/internal/operators';
//import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


describe('HeroProfileComponent', () => {

  let heroesService: HeroesService;

  const HEROE_OBJECT ={
   id:'1',
   name:'Spiderman',
   description: 'El hombre que araña',
   modified:new Date(1518417160),
   thumbnail:
   {
   'path': 'https://i.pinimg.com/originals/c2/93/56/c293563aa553250601d8cb768c044d4b',
   'extension': 'jpg'
   },
   resourceURI:'http://gateway.marvel.com/v1/public/characters/1011334',
   teamColor:'amarillo'};

   class HeroServiceMock {
    public teams = new Map().set("1","amarillo");
 
    public getHeroe(){
      return of({data:{results:HEROE_OBJECT}}).pipe(delay(1000));
    }
 
    public getTeamColor(id){
      return this.teams.get(id);
    }
  }

  let component: HeroProfileComponent;
  let fixture: ComponentFixture<HeroProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComponent,
                      HeroProfileComponent,
                      ModalPollComponent
         ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA,
                NO_ERRORS_SCHEMA],
      imports : [RouterTestingModule, HttpClientModule],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true },
        { provide: HeroesService, useClass: Heroservicemock },
        { provide: ActivatedRoute, useValue: {params : of ({ id: '1 '})}}
      ]
    })
    .compileComponents();

  });

  beforeEach(() => {
    heroesService = TestBed.inject(HeroesService);
    fixture = TestBed.createComponent(HeroProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*
  it('should create the app', () => {
      expect(component).toBeTruthy();
  });
  */
  
  /*
  it('Debería crear el heroe', () => {
    spyOn(heroesService, 'getHeroe').and.callThrough();
    component.ngOnInit();
    setTimeout(()=>{
      expect(component.heroe).toEqual()
    },1500);
  });  
  */
 /*

  it('Debería crear el heroe', () => {
    spyOn(heroesService, 'getHeroe').and.callThrough();
    component.ngOnInit();
    expect(component.heroe).toHaveBeenCalled();
    //expect(heroesService.getHeroe).toHaveBeenCalled();
  });  

  it('deberia configurar el equipo', () =>{
    spyOn(heroesService, 'getTeamColor').and.callThrough();
    component.heroe = HEROE_OBJECT;
    component.getTeam('naranjo');
    expect(heroesService.getTeamColor(component.heroe.id)).toEqual('naranjo');
  });
  */

});