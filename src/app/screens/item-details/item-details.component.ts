import { Car } from 'src/app/model/car';
import { ItemDetails } from './../../data/pages-data';
import { Page } from './../../model/page';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent {
  PageDetails: Page = ItemDetails;
  cars: Array<Car> = [
    { brand: "Bugatti", model: "Bolide", year: 2023, engine: "W16 8.0L 1600HP", maxSpeed: 500, acceleration: 2.1, price: 4500000 },
    { brand: "Rimac", model: "Nevera", year: 2022, engine: "EV 1914HP", maxSpeed: 412, acceleration: 1.9, price: 2200000 }
  ];
}

