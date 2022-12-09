import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[bindingDirective]',
})
export class BindingDirective {
  //Dynamically added the class when the directive was call
  @HostBinding('attr.role') role = 'button';

  @HostBinding('class.btn') isButton: boolean; //btn class in the binding css component link via directive

  @HostListener('mouseover') onHover() {
    this.isButton = true;
  }

  @HostListener('mouseleave') onLeave() {
    this.isButton = false;
  }
  @HostBinding('class') class = 'ground';
  constructor() {
    console.log(this.class);
  }
}
