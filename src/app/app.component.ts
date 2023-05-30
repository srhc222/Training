import { Content } from './model/content';
import { MenuItem } from './model/menu-item';
import { Footer } from './model/footer';
import { Component } from '@angular/core';
import { Header } from './model/header';
import { pageFooter, pageHeader, pageMenuItem, pageContent } from './data/layout-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Training';
  headerModel: Header = pageHeader;
  footerModel: Footer = pageFooter;
  menuModel: MenuItem = pageMenuItem;
  contentModel: Content = pageContent;
}
