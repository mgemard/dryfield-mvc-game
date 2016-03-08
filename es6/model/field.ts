class Champ {
    litreCiterne: number = 3;
    constructor() {

    }
    remplir(qty: number) {
        this.litreCiterne = this.litreCiterne + qty;
    }
    vider(qty: number) {
        this.litreCiterne = this.litreCiterne + qty;
    }
}

export default Champ;
