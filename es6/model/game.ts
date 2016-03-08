import Observable from './../observable/observable.ts';
import Field from './field.ts'
import Observer from "../observer/observer";

class ModelGame implements Observable {

    litreReserve: number = 3; // litre
    nbRecolte: number = 0;
    fields: Field[] = new Array(3);
    conso: number = 1; // litre per second
    argent: number = 50; // dollar
    prixEau: number = 1; //dollar per litre
    prixRecolte: number = 40; // dollar
    timer;

    listObserver: Observer[];

    constructor() {
        this.listObserver = [];
        // creation of fields
        for (let field of this.fields) {
            field = new Field();
        }

    }
    start():void {
        this.timer = setInterval(
            () => {
                this.loop();
            }
            , 1000);
    }
    loop():void {
        this.nbRecolte += 1;
        this.notifyObserver("");
    }
    stop():void {
        clearInterval(this.timer);
    }
    addObserver(obs: Observer):void {
        this.listObserver.push(obs);
    }
    removeObserver(obs: Observer):void {
        this.listObserver.splice(this.listObserver.indexOf(obs),1);
    }
    notifyObserver(state: string):void {
        for (let obs of this.listObserver) {
            obs.update(state);
        }
    }
}

export default ModelGame;

