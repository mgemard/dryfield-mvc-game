import ModelGame from "../model/game";
import ModelStat from "../model/stat";
import ViewGame from "../view/game";
import ViewStat from "../view/stat";
import Observer from "../observer/observer";

class Controler implements Observer{
    modelGame: ModelGame;
    modelStat: ModelStat;
    viewGame: ViewGame;
    viewStat: ViewStat;
    constructor(modelGame: ModelGame, modelStat: ModelStat, viewGame: ViewGame, viewStat: ViewStat) {
        this.modelGame = modelGame;
        this.modelStat = modelStat;
        this.viewGame = viewGame;
        this.viewStat = viewStat;
    }
    stop() {
        this.modelGame.stop();
    }
    start() {
        this.modelGame.start();
    }
    update(state: string):void {
        switch(state) {
            case "start":
                this.modelGame.start();
                break;
            case "stop":
                //code block
                break;
            default:
            //default code block
        }
    }
}

export default Controler;
