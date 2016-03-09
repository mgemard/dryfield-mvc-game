import ModelGame from './model/game.ts';
import ModelStat from './model/stat.ts';
import Controller from './controller/controller.ts';
import ViewGame from './view/game.ts';
import ViewStat from './view/stat.ts';

var modelGame = new ModelGame();
var modelStat = new ModelStat();

var viewGame = new ViewGame(modelGame);
var viewStat = new ViewStat(modelStat);

var controller = new Controller(modelGame, modelStat, viewGame, viewStat);

viewGame.addObserver(controller);
viewStat.addObserver(controller);

modelGame.addObserver(viewGame);

// we show the game view
viewGame.update();

