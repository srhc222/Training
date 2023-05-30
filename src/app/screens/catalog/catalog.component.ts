import { Catalog } from './../../data/pages-data';
import { Component, Input } from '@angular/core';
import { Page } from 'src/app/model/page';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  PageDetails: Page = Catalog;
}

