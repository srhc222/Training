import { WishList } from './../model/wish-list';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishListService {

  wishList: Array<WishList> = [
    {}
  ];

  constructor() { }

  addCar() {
    let car: WishList = {
      brand: 'Rolls Royce',
      model: 'Spectre',
      year: 2023,
    };
    this.wishList.push(car);
  }

  getCars() {
    return this.wishList;
  }

  removeAll() {
    this.wishList = [];
    return this.wishList;
  }

  removeCar(car: WishList) {
    let index = this.wishList.indexOf(car);
    this.wishList.splice(index, 1);
    return this.wishList;
  }
}
