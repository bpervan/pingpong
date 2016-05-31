import {Directive, Input, AfterViewInit, ElementRef} from '@angular/core';
declare var componentHandler: any;

@Directive({
    selector: '[mdlUpgrade]'
})
export class MdlUpgradeElements implements AfterViewInit {
    @Input()
    mglUpgrade;

    constructor(private elementRef: ElementRef){
    }

    ngAfterViewInit(){
        componentHandler.upgradeElement(this.elementRef.nativeElement);
    }
}