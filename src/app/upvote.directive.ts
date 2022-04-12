import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appUpvote]'
})
export class UpvoteDirective {

  n!: number;

  constructor(private elem: ElementRef) { }

  @HostListener("click") onClicks() {
    this.elem.nativeElement++
  }


}
