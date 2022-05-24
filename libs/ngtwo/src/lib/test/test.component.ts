import { Component, Input } from '@angular/core';

@Component({
  selector: 'katrina-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent {
  @Input() title: string;
  @Input() rating: number;
  @Input() flag: boolean;
}
