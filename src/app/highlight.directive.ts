import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() color = 'yello';
  constructor(private element: ElementRef) {

  }

  @HostListener('mouseenter') addHighlight() {
    this.element.nativeElement.style.backgroundColor = this.color;
  }

  @HostListener('mouseleave') removeHighlight() {
    this.element.nativeElement.style.backgroundColor = null;
  }

}
