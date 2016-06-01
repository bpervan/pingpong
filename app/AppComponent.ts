/**
 * Created by bpervan on 31.5.2016..
 */

import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import {DashboardComponent} from './components/DashboardComponent';
import {TournamentCreationComponent} from './components/TournamentCreationComponent';
import {InTournamentComponent} from "./components/InTournamentComponent";


@Component({
    selector: 'app',
    template: `
        <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        
            <div class="android-header mdl-layout__header mdl-layout__header--waterfall">
                <div class="mdl-layout__header-row">
                    <span class="android-title mdl-layout-title">
                        <h3>Alive and kicking</h3>
                    </span>
                    <div class="android-header-spacer mdl-layout-spacer"></div>
                    <div class="android-navigation-container">
                        <nav class="android-navigation mdl-navigation">
                            <a class="mdl-navigation__link mdl-typography--text-uppercase" [routerLink]="['/dashboard']">Dashboard</a>
                            <a class="mdl-navigation__link mdl-typography--text-uppercase" [routerLink]="['/create']">New tournament</a>
                        </nav>
                    </div>
                </div>
            </div>
        <router-outlet></router-outlet>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})
@Routes(<any>[
    {
        path: '/dashboard',
        component: DashboardComponent,
        name: 'Dashboard'
    },
    {
        path: '/create',
        component: TournamentCreationComponent,
        name: 'TournamentCreation'
    },
    {
        path: '/tournament/:players',
        component: InTournamentComponent,
        name: 'InTournament'
    }
])
export class AppComponent {

}