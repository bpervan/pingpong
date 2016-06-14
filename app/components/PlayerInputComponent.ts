import {Component, Input, Output, EventEmitter, AfterViewInit} from '@angular/core';
import {TextboxComponent} from "./simple/TextboxComponent";
import {ButtonComponent} from "./simple/ButtonComponent"
import {Player} from "../model/Player";

@Component(<any>{
    selector: 'player-input',
    template: `
        <mdl-textbox [htmlId]="player.id" [labelText]="label" [placeholder]="label"></mdl-textbox>
        <mdl-button (onClick)="iksClicked($event)" buttonText="Iks"></mdl-button><br /><br />
    `,
    directives: [ButtonComponent, TextboxComponent]
})
export class PlayerInputComponent implements AfterViewInit{

    @Input()
    player: Player;
    @Output()
    selfDestruct = new EventEmitter<string>();

    private label = "Player name";

    constructor(){
    }

    iksClicked(event){
        console.log("Captured iksClicked in PlayerInputComponent");
        console.log("$event: " + event);
        this.selfDestruct.emit(this.player.id);
    }

    ngAfterViewInit() {
        
    }
}