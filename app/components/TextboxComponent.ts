import {Component} from '@angular/core';

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
export class TextboxComponent {
    public id: String;
    public text: String;

    constructor(){
    }
}