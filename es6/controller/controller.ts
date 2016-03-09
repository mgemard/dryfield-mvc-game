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
            case "jouer":
                //code block
                this.modelGame.addObserver(this.viewGame);
                this.modelStat.removeObserver(this.viewStat);
                this.viewGame.update();
                break;
            case "scores":
                //code block
                this.modelGame.removeObserver(this.viewGame);
                this.modelStat.addObserver(this.viewStat);
                this.viewStat.update();
                break;
            case "start":
                if (!this.modelGame.running) {
                    this.modelGame.start();
                    this.viewGame.update();
                }
                break;
            case "irriger0":
                if (this.modelGame.running) this.modelGame.irriger(0);
                break;
            case "recolter0":
                if (this.modelGame.running) this.modelGame.recolter(0);
                break;
            case "irriger1":
                if (this.modelGame.running) this.modelGame.irriger(1);
                break;
            case "recolter1":
                if (this.modelGame.running) this.modelGame.recolter(1);
                break;
            case "irriger2":
                if (this.modelGame.running) this.modelGame.irriger(2);
                break;
            case "recolter2":
                if (this.modelGame.running) this.modelGame.recolter(2);
                break;
            case "buy":
                if (this.modelGame.running) this.modelGame.buy();
                break;
            default:
            //default code block
        }
    }
}

export default Controler;
