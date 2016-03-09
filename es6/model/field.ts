import Citerne from "./citerne.ts";

class Field {
    citerne: Citerne;
    recolte: number;
    maxRecolte: number = 20;
    constructor() {
        this.recolte = 0;
        this.citerne = new Citerne();
    }
    pousser(): void {
        if (this.citerne.litreCiterne == 0) {
            this.recolte = 0;
        }
        else if(this.recolte < this.maxRecolte ) {
            this.recolte++;
        }
    }
    recolter(): boolean {
        if(this.recolte == 20 ) {
            this.recolte = 0;
            return true;
        }
        return false;
    }
    remplir(qty: number): number {
        return this.citerne.remplir(qty);
    }
    vider(qty: number) {
        this.citerne.vider(qty);
    }
}

export default Field;
