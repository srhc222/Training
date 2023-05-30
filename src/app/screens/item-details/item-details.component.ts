import { Car } from 'src/app/model/car';
import { ItemDetails } from './../../data/pages-data';
import { Page } from './../../model/page';
import { Component, OnInit } from '@angular/core';
import { ItemDetailsService } from 'src/app/services/item-details.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css'],
})
export class ItemDetailsComponent {
  PageDetails: Page = ItemDetails;
  carsList: Array<Car> = [
    {
      brand: 'Bugatti',
      model: 'Bolide',
      year: 2023,
      engine: 'W16 8.0L 1,600HP',
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
  constructor(private itemDetailsService: ItemDetailsService) {}

  addCar() {
    this.itemDetailsService.addCar();
  }

  getCars() {
    this.carsList = this.itemDetailsService.getCars();
  }

  removeAll() {
    this.carsList = this.itemDetailsService.removeAll();
    window.alert('The car has been successfully added!');
  }

  removeCar(car: Car) {
    this.carsList = this.itemDetailsService.removeCar(car);
  }
}
