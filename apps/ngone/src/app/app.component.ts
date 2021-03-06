import { Component, Input } from '@angular/core';

@Component({
  selector: 'katrina-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @Input() title: string;
  @Input() rating: number;
  @Input() flag: boolean;
}
