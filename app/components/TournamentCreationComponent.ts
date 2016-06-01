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
        <player-input *ngFor="let player of players" [player]="player"></player-input>
        <mdl-button (onClick)="handleAddPlayer($event)" buttonText="Add new"></mdl-button><br />
        <mdl-button (onClick)="handleTournamentStart($event)" buttonText="Start tournament"></mdl-button>
    `,
    directives: [PlayerInputComponent, TextboxComponent, ButtonComponent]
})
export class TournamentCreationComponent implements AfterViewInit {


    private players: Array<Player>;

    constructor(private elementRef: ElementRef, private router: Router){
        this.players = [];
        this.players.push(new Player({id: 'test1', name: 'Test1'}));
        this.players.push(new Player({id: 'test2', name: 'Test2'}));
        this.players.push(new Player({id: 'test3', name: 'Test3'}));
        this.players.push(new Player({id: 'test4', name: 'Test4'}));
        this.players.push(new Player({id: 'test5', name: 'Test5'}));
    }

    handleAddPlayer(inputBoolean: boolean){
        this.players.push(new Player({id: 'asdf', name: 'asdf'}));
    }

    handleTournamentStart(inputBoolean: boolean){
        this.router.navigate(['/tournament', btoa(JSON.stringify(this.players))]);
    }

    ngAfterViewInit() {
    }
}