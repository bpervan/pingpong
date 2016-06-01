import {Component, Input, ElementRef, AfterViewInit, OnInit} from '@angular/core';
import {Router, OnActivate, RouteSegment} from '@angular/router';
import {Player} from "../model/Player";

@Component({
    selector: 'in-tournament',
    template: `
        <h1>InTournament</h1>
        <p *ngFor="let playerpair of playerPairs">{{playerpair.first.name}} vs. {{playerpair.second.name}}</p>
    `
})
export class InTournamentComponent implements OnInit, OnActivate {
    public players: Array<Player>;
    public playerPairs: Array<PlayerPair>;


    constructor(private router: Router){
        this.playerPairs = new Array<PlayerPair>();
    }

    ngOnInit():any {
        console.log("InTournament initialized");
    }

    routerOnActivate(curr:RouteSegment) {
        let inputPlayers = JSON.parse(atob(curr.getParam('players')));
        this.players = Player.fromArray(inputPlayers);
        this.generatePairs();
    }

    generatePairs(){
        for(let i = 0; i < this.players.length; ++i){
            for(let j = i + 1; j < this.players.length; ++j){
                this.playerPairs.push(new PlayerPair(this.players[i], this.players[j]));
            }
        }
    }
}

class PlayerPair {
    public first: Player;
    public second: Player;

    constructor(first: Player, second: Player){
        this.first = first;
        this.second = second;
    }
}