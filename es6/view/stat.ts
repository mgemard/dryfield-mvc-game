import Observer from './../observer/observer.ts';
import Observable from './../observable/observable.ts';
import ModelStat from "../model/stat";
import '../../css/stat.css';
import '../../css/menu.css';

class ViewStat implements Observer, Observable {

    listObserver:Observer[];
    model: ModelStat;

    constructor(model) {
        this.listObserver = [];
        this.model = model;
    }
    update(state: string):void {
        //console.log(this.model.score);
        var score = this.model.score.slice();

        score.sort(function(a, b) {
            //console.log(b.score - a.score);
            return b.score - a.score
        })

        document.getElementById("my-app").innerHTML =
            `<div class='push-right'>`+
                `<div>`+
                    `<button id="jouer">Jouer</button>`+
                    `<button id="scores">Scores</button>`+
                `</div>`+
                `<div id='button-start'><button id="refresh">Refresh</button></div>`+
            `</div>`+
            `<div>`+
                `<h1>Classement</h1>`+
            `</div>`+
            `<div class="flex-container">`+
            `<table>`+
                `<tr>`+
                    `<th></th>`+
                    `<th>Name</th>`+
                    `<th>Score</th>`+
                `</tr>`+
                `<tr>`+
                    `<td>1</td>`+
                    `<td>${score[0].player}</td>`+
                    `<td>${score[0].score}</td>`+
                `</tr>`+
                `<tr>`+
                    `<td>2</td>`+
                    `<td>${score[1].player}</td>`+
                    `<td>${score[1].score}</td>`+
                `</tr>`+
                    `<td>3</td>`+
                    `<td>${score[3].player}</td>`+
                    `<td>${score[3].score}</td>`+
                `</tr>`+
            `</table>`+

            `</div>`;
        document.getElementById("jouer").addEventListener("click", () => this.notifyObserver("jouer"), false);
        document.getElementById("scores").addEventListener("click", () => this.notifyObserver("scores"), false);
        document.getElementById("refresh").addEventListener("click", () => this.notifyObserver("refresh"), false);
    }
    addObserver(obs: Observer):void {
        this.listObserver.push(obs);
    }
    removeObserver(obs: Observer):void {
        this.listObserver.splice(this.listObserver.indexOf(obs),1);
    }
    notifyObserver(state: string):void {
            for (let i = 0; i < this.listObserver.length; i++) {
                this.listObserver[i].update(state);
            }

    }
}

export default ViewStat;
