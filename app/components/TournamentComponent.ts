/**
 * Created by bpervan on 31.5.2016..
 */

import {Component, ElementRef} from '@angular/core';
import {TextboxComponent} from './simple/TextboxComponent'
import {ButtonComponent} from "./simple/ButtonComponent";
import {Player} from "../model/Player";
import {PlayerInputComponent} from "./PlayerInputComponent";

@Component(<any>{
    selector: 'tournament',
    template: `
        <player-input *ngFor="let player of players" [id]="player.name" [player]="player"></player-input>
        <btn (onClick)="handleAddPlayer($event)" buttonText="Add new"></btn><br />
        <btn (onClick)="handleTournamentStart($event)" buttonText="Start tournament"></btn>
    `,
    directives: [PlayerInputComponent, TextboxComponent, ButtonComponent]
})
export class TournamentComponent {

    private players: Array<Player>;

    constructor(private elementRef: ElementRef){
        this.players = [];
        this.players.push(new Player("Test1"));
        this.players.push(new Player("Test2"));
        this.players.push(new Player("Test3"));
    }

    handleAddPlayer(inputBoolean: boolean){
        console.log("Captured click in tournamentcomponent");
        this.players.push(new Player(""));
    }

    handleTournamentStart(inputBoolean: boolean){
        console.log("Captured click tournametstart")
    }
}