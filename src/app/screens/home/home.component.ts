import { Home } from './../../data/pages-data';
import { Page } from './../../model/page';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  PageDetails: Page = Home;
}

