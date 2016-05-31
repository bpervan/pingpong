import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'btn',
    template: `
        <button (click)="click()" class="mdl-button mdl-js-button mdl-button--raised">
            {{buttonText}}
        </button>
    `
})
export class ButtonComponent {
    @Input()
    buttonText;
    @Output()
    onClick = new EventEmitter<boolean>();

    click(){
        this.onClick.emit(false);
    }
}