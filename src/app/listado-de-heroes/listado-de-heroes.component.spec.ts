import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import {getTestBed, ComponentFixtureAutoDetect} from "@angular/core/testing";
import { ListadoDeHeroesComponent } from './listado-de-heroes.component';

describe('ListadoDeHeroesComponent', () => {
  let component: ListadoDeHeroesComponent;
  let fixture: ComponentFixture<ListadoDeHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoDeHeroesComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA,
                NO_ERRORS_SCHEMA],
      imports : [RouterTestingModule, HttpClientModule],
      providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
        ]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoDeHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debria crear el listado de heroes', () => {
    expect(component).toBeTruthy();
  });
});