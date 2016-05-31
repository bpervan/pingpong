import {Component, Input} from '@angular/core';
import {TextboxComponent} from "./simple/TextboxComponent";
import {ButtonComponent} from "./simple/ButtonComponent"
import {Player} from "../model/Player";

@Component(<any>{
    selector: 'player-input',
    template: `
        <textbox id="id" text="{{player.name}}"></textbox><btn buttonText="Iks"></btn><br />
    `,
    directives: [ButtonComponent, TextboxComponent]
})
export class PlayerInputComponent {
    @Input()
    id: string;
    @Input()
    player: Player;

    constructor(){
    }
}