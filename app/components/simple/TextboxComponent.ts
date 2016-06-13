import {Component, Input, ElementRef, AfterViewInit} from '@angular/core';
declare var componentHandler: any;

@Component({
    selector: 'mdl-textbox',
    template: `
        <div>
            <input type="text" [id]="htmlId">
            <label [htmlFor]="htmlId">{{initialText}}</label>
        </div>
    `
})
export class TextboxComponent implements AfterViewInit{
    @Input()
    public htmlId: String;
    @Input()
    public initialText: String;

    constructor(private elementRef: ElementRef){
    }

    ngAfterViewInit(){
        componentHandler.upgradeElement(this.elementRef.nativeElement);
    }
}