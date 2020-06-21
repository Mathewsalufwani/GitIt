import { Directive,  ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnHover]'
})
export class OnHoverDirective {

  constructor(private elem:ElementRef) {}

  @HostListener("mouseover") onMouseOver(){
    this.text("#8080ff")
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.text("black");
  }

  private text(action:string){ 
    this.elem.nativeElement.style.color=action;
  }

}
