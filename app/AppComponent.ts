/**
 * Created by bpervan on 31.5.2016..
 */

import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {DashboardComponent} from './components/DashboardComponent';
import {TournamentComponent} from './components/TournamentComponent';


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
                            <a class="mdl-navigation__link mdl-typography--text-uppercase" [routerLink]="['Dashboard']">Dashboard</a>
                            <a class="mdl-navigation__link mdl-typography--text-uppercase" [routerLink]="['Tournament']">New tournament</a>
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
@RouteConfig([
    <any>{
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/tournament',
        name: 'Tournament',
        component: TournamentComponent
    }
])
export class AppComponent {

}