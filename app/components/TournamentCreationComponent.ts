/**
 * Created by bpervan on 31.5.2016..
 */

import {Component, ElementRef, AfterViewInit} from '@angular/core';
import {Router} from '@angular/router';
import {TextboxComponent} from './simple/TextboxComponent'
import {ButtonComponent} from "./simple/ButtonComponent";
import {Player} from "../model/Player";
import {PlayerInputComponent} from "./PlayerInputComponent";

@Component(<any>{
    selector: 'tournament-creation',
    template: `
        <player-input *ngFor="let player of players" [player]="player" (selfDestruct)="handleRemovePlayer($event)"></player-input>
        <mdl-button (onClick)="handleAddPlayer($event)" buttonText="Add new"></mdl-button><br /><br />
        <mdl-button (onClick)="handleTournamentStart($event)" buttonText="Start tournament"></mdl-button>
    `,
    directives: [PlayerInputComponent, TextboxComponent, ButtonComponent]
})
export class TournamentCreationComponent implements AfterViewInit {


    private players: Array<Player>;

    constructor(private elementRef: ElementRef, private router: Router){
        this.players = [];
        this.players.push(new Player({id: 'test1', name: 'Test1', surname: 'Test1', nick: 'test1'}));
        this.players.push(new Player({id: 'test2', name: 'Test2', surname: 'Test2', nick: 'test2'}));
    }

    handleAddPlayer(placeholder: boolean){
        let randomId = this.generateRandom();
        this.players.push(new Player({
            id: 'test' + randomId,
            name: 'Test' + randomId,
            surname: 'Test' + randomId, 
            nick: 'test' + randomId
        }));
    }

    handleRemovePlayer(playerId: string){
        console.log("Captured selfDestruct in TournamentCreationComponent");
        console.log("playerId/$event: " + playerId);
        this.players = this.players.filter(item => item.id != playerId);
        console.log(this.players);
    }

    handleTournamentStart(inputBoolean: boolean){
        this.router.navigate(['/tournament', btoa(JSON.stringify(this.players))]);
    }

    generateRandom(){
        return Math.floor(Math.random() * 1000000) + 1;
    }

    ngAfterViewInit() {
    }
}