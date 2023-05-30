import { Car } from './../model/car';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ItemDetailsService {
  cars: Array<Car> = [
    {
      brand: 'Bugatti',
      model: 'Bolide',
      year: 2023,
      engine: 'W16 8.0L 1,600hp',
      maxSpeed: '500 km/h',
      acceleration: '0-100: 2.1s',
      price: '4,500,000 $',
    },
    {
      brand: 'Rimac',
      model: 'Nevera',
      year: 2022,
      engine: 'EV 1,914HP',
      maxSpeed: '412 km/h',
      acceleration: '0-100: 1.9s',
      price: '2,200,000 $',
    },
  ];
  constructor() {}

  addCar() {
    let car: Car = {
      brand: 'Rolls Royce',
      model: 'Spectre',
      year: 2023,
      engine: 'EV 576HP',
      maxSpeed: '250 km/h',
      acceleration: '0-100: 4.5s',
      price: '400,000 $',
    };
    this.cars.push(car);
  }

  getCars() {
    return this.cars;
  }

  removeAll() {
    this.cars = [];
    return this.cars;
  }

  removeCar(car: Car) {
    let index: number = this.cars.indexOf(car);
    this.cars.splice(index, 1);
    return this.cars;
  }
}
