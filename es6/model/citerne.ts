class Citerne {
    litreCiterne: number;
    maxLitre: number;
    constructor() {
        this.litreCiterne = 3;
        this.maxLitre = Infinity;
    }
    remplir(qty: number): number {
        var old = this.litreCiterne;
        this.litreCiterne = Math.min(old + qty, this.maxLitre);
        return this.litreCiterne - old;
    }
    vider(qty: number): void {
        this.litreCiterne = Math.max(this.litreCiterne - qty, 0);
    }
}

export default Citerne;
