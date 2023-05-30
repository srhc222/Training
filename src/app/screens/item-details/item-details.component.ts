import { ItemDetails } from './../../data/pages-data';
import { Page } from './../../model/page';
import { Component } from '@angular/core';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent {
  PageDetails: Page = ItemDetails
}

