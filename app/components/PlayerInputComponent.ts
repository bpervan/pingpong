import {Component, Input, AfterViewInit} from '@angular/core';
import {TextboxComponent} from "./simple/TextboxComponent";
import {ButtonComponent} from "./simple/ButtonComponent"
import {Player} from "../model/Player";

@Component(<any>{
    selector: 'player-input',
    template: `
        <mdl-textbox [htmlId]="player.id" [initialText]="player.name"></mdl-textbox><mdl-button buttonText="Iks"></mdl-button><br />
    `,
    directives: [ButtonComponent, TextboxComponent]
})
export class PlayerInputComponent implements AfterViewInit{

    @Input()
    player: Player;

    constructor(){
    }

    ngAfterViewInit() {
        
    }
}