import { Content } from './../../model/content';
import { pageContent } from './../../data/layout-data';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  @Input() contentModel!: Content;
}
