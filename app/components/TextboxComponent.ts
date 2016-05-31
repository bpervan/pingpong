import {Component, ElementRef, AfterViewInit} from '@angular/core';
declare var componentHandler: any;

@Component({
    selector: 'textbox',
    template: `
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" type="text" [id]="id">
            <label class="mdl-textfield__label"  [htmlFor]="id">{{text}}</label>
        </div>
    `,
    inputs: ['id', 'text']
})
export class TextboxComponent implements AfterViewInit{
    public id: String;
    public text: String;

    constructor(private elementRef: ElementRef){
    }

    ngAfterViewInit(){
        componentHandler.upgradeElement(this.elementRef.nativeElement);
    }
}