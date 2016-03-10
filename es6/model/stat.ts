import Observable from './../observable/observable.ts';
import Observer from "../observer/observer";

class ModelStat implements Observable {
    score;
    listObserver:Observer[];
    constructor() {
        this.listObserver = [];
        this.fetchScore();
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
    fetchScore(): void {
        var that = this;
        var request = new XMLHttpRequest();
        request.open('GET', 'http://10.1.2.253:8080/data/score', true);
        //request.setRequestHeader('Content-Type', "application/json;charset=UTF-8");
        request.onreadystatechange = function() {
            //console.log(this.readyState);
            if (this.readyState === 4) {
                if (this.status >= 200 && this.status < 400) {
                    // Success!
                    console.log("fetched");
                    var data = JSON.parse(this.responseText);
                    that.score = data;
                   // console.log("no err");
                    //console.log(that);
                   // console.log(this.score[0].recolte);
                    that.notifyObserver("");
                } else {
                    //console.log("err");
                    // Error :(
                }
            }
        };
        request.send();
        request = null;
    }
}

export default ModelStat;
