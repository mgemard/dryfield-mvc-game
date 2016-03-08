import Observer from './../observer/observer.ts';
import Observable from './../observable/observable.ts';
import ModelGame from "../model/game";
import '../../css/game.css';

class ViewGame implements Observer, Observable {

    listObserver:Observer[];
    model: ModelGame;

    constructor(model) {
        this.listObserver = [];
        this.model = model;
    }
    update():void {
        document.getElementById("my-app").innerHTML =
            `<div>` +
                `<div> ${this.model.nbRecolte} Recolte </div>`+
                `<div> Recolte </div>`+
                `<button id="start">Start</button>`+
            `</div>`;
        document.getElementById("start").addEventListener("click", () => this.notifyObserver("start"), false)
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

export default ViewGame;
