import {Component, Input, ElementRef, AfterViewInit} from '@angular/core';

@Component({
    selector: 'mdl-textbox',
    template: `
        <div class="form-group">
            <label class="col-md-4 control-label" [htmlFor]="htmlId">{{labelText}}</label>
            <div class="col-md-4">
                <input type="text" [id]="htmlId" [placeholder]="placeholder" class="form-control input-md">
            </div>
        </div>
    `
})
export class TextboxComponent implements AfterViewInit{
    @Input()
    public htmlId: String;
    @Input()
    public labelText: String;
    @Input()
    public placeholder: String;

    constructor(private elementRef: ElementRef){
    }

    ngAfterViewInit(){
    }
}