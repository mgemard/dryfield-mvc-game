import Observable from './../observable/observable.ts';
import Field from './field.ts'
import Observer from "../observer/observer";

class ModelGame implements Observable {
    litreReserve: number; // litre
    nbRecolte: number;
    fields: Field[] = new Array(3);
    conso: number; // litre per second
    consoMax: number;
    dollar: number; // dollar
    prixEau: number; //dollar per litre
    prixRecolte: number; // dollar
    timer;
    running: boolean = false;
    gameOver: boolean = true;

    name: string = "Player";

    qtyIrrigation: number = 3; // litre per irrigation
    qtyAchat: number = Infinity; // litre per buy

    listObserver: Observer[];

    constructor() {
        this.listObserver = [];
        // creation of fields
        this.init();
    }
    init(): void {
        this.litreReserve = 3;
        this.nbRecolte = 0;
        for (let i = 0; i < 3; i++){
            this.fields[i] = new Field();
        }
        this.conso = 1
        this.dollar = 50;
        this.prixEau = 1;
        this.prixRecolte = 40;
    }
    start():void {
        this.init();
        this.gameOver = false;
        this.running = true;
        this.timer = setInterval(
            () => {
                this.loop();
            }
            , 1000);
    }
    loop():void {
        console.log(this.conso);
        //this.conso = Math.min(this.conso+0.01, this.consoMax);
        this.conso += 0.01;
        if (this.conso > this.consoMax) {
            this.conso = this.consoMax;
        }
        console.log(this.conso);
        this.gameOver = true;
        for (let i = 0; i < 3; i++){
            if (this.fields[i].recolte != 20) {
                this.fields[i].vider(this.conso);
                this.fields[i].pousser();
            }
            if (this.fields[i].citerne.litreCiterne != 0
                && this.gameOver) {
                this.gameOver = false;
            }
        }
        this.notifyObserver("");
        if (this.gameOver) {
            this.stop();
            this.running =  false;

            var request = new XMLHttpRequest();
            request.open('POST', 'http://10.1.2.253:8080/data/score', true);
            request.onreadystatechange = function () {
                if (request.readyState == 4) {
                    console.log("sent");
                }
            };
            request.setRequestHeader('Content-Type', "application/json;charset=UTF-8");
            request.send(JSON.stringify( { "player" : this.name, "score": this.nbRecolte } ));
        }
    }
    changeName(name: string):void {
        this.name = name;
        console.log(this.name);
    }
    irriger(field: number):void {
        var qtyMax = Math.min(this.qtyIrrigation, this.litreReserve);
        var qtyRemplie = this.fields[field].remplir(qtyMax);
        this.litreReserve -= qtyRemplie;
        this.notifyObserver("");
    }
    recolter(field: number):void {
        var recolte = this.fields[field].recolter();
        if (recolte) {
            this.nbRecolte++;
            this.dollar += 40;
            this.notifyObserver("");
        }
    }
    buy():void {
        var qtyMax = Math.min(this.dollar/this.prixEau, this.qtyAchat);
        if (qtyMax !=0) {
            this.litreReserve += qtyMax;
            this.dollar -= qtyMax * this.prixEau;
            this.notifyObserver("");
        }
    }
    stop():void {
        this.running = false;
        clearInterval(this.timer);
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

export default ModelGame;
