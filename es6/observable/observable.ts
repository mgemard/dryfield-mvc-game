import Observer from "../observer/observer";

interface Observable {
    listObserver: Observer[];
    addObserver(obs: Observer): void;
    removeObserver(obs: Observer): void;
    notifyObserver(state: string): void;
}

export default Observable;
