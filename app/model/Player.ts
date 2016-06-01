export class Player {
    id: string;
    name: string;
    surname: string;
    nick: string;

    constructor(data: {
        id: string,
        name: string,
        surname?: string,
        nick?: string
    }){
        this.id = data.id;
        this.name = data.name;
        this.surname = data.surname || '';
        this.nick = data.nick || '';
    }

    public static fromArray(playersArray: Array<any>): Array<Player>{
        return playersArray.map(player => new Player(<any>player));
    }
}