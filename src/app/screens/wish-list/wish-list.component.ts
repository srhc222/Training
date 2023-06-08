import { wishList } from './../../data/pages-data';
import { Page } from './../../model/page';
import { WishListService } from 'src/app/services/wish-list.service';
import { WishList } from './../../model/wish-list';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent {
  PageDetails: Page = wishList;
  public wishList: WishList = {};
  car: any;
  constructor(private wishListService: WishListService){}
  addCar() {
    this.car.wishListService.addCar(this.car);
  }
//fix this code
  getCars() {
    this.car = this.wishListService.getCars();
  }

  removeAll() {
    this.car = this.wishListService.removeAll();
    window.alert('The car has been successfully added!');
  }

  removeCar(car: WishList) {
    this.car = this.wishListService.removeCar(car);
  }
}
