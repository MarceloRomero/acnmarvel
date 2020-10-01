import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HeroesService } from './heroes.service';
import { HttpClientModule } from '@angular/common/http';

describe('HeroesService', () => {
  let service: HeroesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientModule]
    });
    service = TestBed.inject(HeroesService);
  });
  afterEach(() => { 
    service = null;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test getHeroes function', () => {
    spyOn(service, 'getHeroes').and.callThrough();
    service.getHeroes();
    expect(service.getHeroes).toHaveBeenCalled();
    expect(service.heroes).toBeDefined();
  });

});