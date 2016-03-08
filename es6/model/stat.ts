import Observable from './../observable/observable.ts';
import Observer from "../observer/observer";


class ModelStat implements Observable {
    listObserver:Observer[];
    constructor() {

    }

    addObserver(obs:Observer):void {
    }

    removeObserver(obs:Observer):void {
    }

    notifyObserver(date):void {
    }

}

export default ModelStat;
