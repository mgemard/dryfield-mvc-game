import Observer from './../observer/observer.ts';
import Observable from './../observable/observable.ts';
import ModelGame from "../model/game";

class ViewStat implements Observer, Observable {

    listObserver:Observer[];
    model: ModelGame;

    constructor(model) {
        this.listObserver = [];
        this.model = model;
    }
    update():void {
        document.getElementById("my-app").innerHTML =
            `<div class="flex-container">` +
            `<div> ${this.model.nbRecolte} Recolte </div>`+
            `<div> Recolte </div>`+
            `<button id="stop">Stop</button>`+
            `</div>`;
        document.getElementById("stop").addEventListener("click", () => this.notifyObserver(), false)
    }
    addObserver(obs: Observer):void {
        this.listObserver.push(obs);
    }
    removeObserver(obs: Observer):void {
        this.listObserver.splice(this.listObserver.indexOf(obs),1);
    }
    notifyObserver():void {
            for (let i = 0; i < this.listObserver.length; i++) {
                this.listObserver[i].update("");
            }

    }
}

export default ViewStat;
