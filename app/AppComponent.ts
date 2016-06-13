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
        <nav class="navbar navbar-inverse navbar-static-top">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">Project name</a>
                </div>
                <div id="navbar" class="collapse navbar-collapse">
                    <ul class="nav navbar-nav">
                        <li><a [routerLink]="['/dashboard']">Dashboard</a></li>
                        <li><a [routerLink]="['/create']">New tournament</a></li>
                    </ul>
                </div><!--/.nav-collapse -->
            </div>
        </nav>
        <div class="container">
            <div class="starter-template">
                <h1>Bootstrap starter template</h1>
                <p class="lead"><router-outlet>
                    </router-outlet>
                </p>
            </div>
        </div><!-- /.container -->
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