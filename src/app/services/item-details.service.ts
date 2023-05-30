import { Car } from './../model/car';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemDetailsService {
  cars: Array<Car> = [
    { brand: "Bugatti", model: "Bolide", year: 2023, engine: "W16 8.0L 1600HP", maxSpeed: 500, acceleration: 2.1, price: 4500000 },
    { brand: "Rimac", model: "Nevera", year: 2022, engine: "EV 1914HP", maxSpeed: 412, acceleration: 1.9, price: 2200000 }
  ];
  constructor() { }

  addCar(car: Car) {
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
