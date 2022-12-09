import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {

  isActive: boolean;

  // Adding Single Class
  @HostBinding('class') class = 'color';

  //Adding Multiple Class
  @HostBinding('class') classes = 'color background';

  //Adding class via property (if property is true class is applied)
  @HostBinding('class.color') getClass() {
    return this.isActive;
  }
}
