import { Directive, Input, ElementRef } from '@angular/core';
@Directive({
  selector: '[appBackgroundColor]'
})
export class BackgroundColorDirective {
  @Input() appBackgroundColor: string = null;
  constructor(
    private $element: ElementRef
  ) {}
  ngOnInit() {
    this.$element.nativeElement.style.backgroundColor = this.appBackgroundColor;
  }
}
