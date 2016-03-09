

import Observer from './../observer/observer.ts';
import Observable from './../observable/observable.ts';
import ModelGame from "../model/game";
import '../../css/game.css';
import '../../css/menu.css';

class ViewGame implements Observer, Observable {

    listObserver:Observer[];
    model: ModelGame;

    constructor(model) {
        this.listObserver = [];
        this.model = model;
    }
    update():void {
        document.getElementById("my-app").innerHTML =
            `<div class='push-right'>`+
                `<div>`+
                    `<button id="jouer">Jouer</button>`+
                    `<button id="scores">Scores</button>`+
                `</div>`+
                `<div id='button-start'><button id="start" ${!this.model.gameOver ? 'disabled': ''}>Go</button></div>`+
            `</div>`+
            `<div class='game-info-flex-container'>` +
                `<div class='game-info-flex-item'> ${this.model.nbRecolte} Recolte </div>`+
                `<div class='game-info-flex-item'> ${this.model.litreReserve} L </div>`+
                `<div class='game-info-flex-item'> ${this.model.dollar} $ </div>`+
            `</div>`+
            `<div class='fields-flex-container'>` +
                `<div class='fields-flex-item'>`+
                    `<div><button id="irriger0">Irriger</button></div>`+
                    `<div>${this.model.fields[0].citerne.litreCiterne} L </div>`+
                    `<div>${this.model.fields[0].recolte*5} % </div>`+
                    `<div><button id="recolter0">Récolter</button></div>`+
                `</div>`+
                `<div class='fields-flex-item'>`+
                    `<div><button id="irriger1">Irriger</button></div>`+
                    `<div>${this.model.fields[1].citerne.litreCiterne} L </div>`+
                     `<div>${this.model.fields[1].recolte*5} % </div>`+
                    `<div><button id="recolter1">Récolter</button></div>`+
                `</div>`+
                `<div class='fields-flex-item'>`+
                    `<div><button id="irriger2">Irriger</button></div>`+
                    `<div>${this.model.fields[2].citerne.litreCiterne} L </div>`+
                    `<div>${this.model.fields[2].recolte*5} % </div>`+
                    `<div><button id="recolter2">Récolter</button></div>`+
                `</div>`+
            `</div>`+
                `<button id="buy">Acheter de l'eau</button>`+
            `<div>`;
        document.getElementById("jouer").addEventListener("click", () => this.notifyObserver("jouer"), false);
        document.getElementById("scores").addEventListener("click", () => this.notifyObserver("scores"), false);
        document.getElementById("start").addEventListener("click", () => this.notifyObserver("start"), false);
        document.getElementById("irriger0").addEventListener("click", () => this.notifyObserver("irriger0"), false);
        document.getElementById("recolter0").addEventListener("click", () => this.notifyObserver("recolter0"), false);
        document.getElementById("irriger1").addEventListener("click", () => this.notifyObserver("irriger1"), false);
        document.getElementById("recolter1").addEventListener("click", () => this.notifyObserver("recolter1"), false);
        document.getElementById("irriger2").addEventListener("click", () => this.notifyObserver("irriger2"), false);
        document.getElementById("recolter2").addEventListener("click", () => this.notifyObserver("recolter2"), false);
        document.getElementById("buy").addEventListener("click", () => this.notifyObserver("buy"), false);
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
