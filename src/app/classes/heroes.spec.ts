import { Heroe } from './heroe';

describe('Heroes', () => {
  it('should create an instance', () => {
    expect(new Heroe(
      '1',
      'Spiderman',
      'El hombre que araña',
      new Date(1518417160),
      'https://i.pinimg.com/originals/c2/93/56/c293563aa553250601d8cb768c044d4b',
      'jpg',
      'http://gateway.marvel.com/v1/public/characters/1011334'
    )).toBeTruthy();
  });
});
