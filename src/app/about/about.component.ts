import { Component } from '@angular/core';
import { photographersStyle } from './PhotographersStyle';
import { photographers } from './Photographers';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  photographers: photographersStyle[] = photographers;
}
