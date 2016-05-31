/**
 * Created by bpervan on 31.5.2016..
 */

import {Component} from '@angular/core';
import {TextboxComponent} from './TextboxComponent'

@Component(<any>{
    selector: 'tournament',
    template: '<textbox id="prvi"></textbox><br /><textbox id="drugi"></textbox>',
    directives: [TextboxComponent]
})
export class TournamentComponent {

}