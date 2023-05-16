import { pageHeader } from 'src/app/data/layout-data';
import { Header } from './../../model/header';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  headerModel: Header = pageHeader;
}
