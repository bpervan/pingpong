import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'mdl-button',
    template: `
        <button (click)="handleClick()" class="btn btn-lg btn-info">
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