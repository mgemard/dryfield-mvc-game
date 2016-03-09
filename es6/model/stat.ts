import Observable from './../observable/observable.ts';
import Observer from "../observer/observer";


class ModelStat implements Observable {
    listObserver:Observer[];
    constructor() {
        this.listObserver = [];
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

export default ModelStat;
