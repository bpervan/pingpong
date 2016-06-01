import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'mdl-button',
    template: `
        <button (click)="handleClick()" class="mdl-button mdl-js-button mdl-button--raised">
            {{buttonText}}
        </button>
    `
})
export class ButtonComponent {
    @Input()
    buttonText;
    @Output()
    onClick = new EventEmitter<boolean>();

    handleClick(){
        this.onClick.emit(false);
    }
}