import { makeAutoObservable } from "mobx";

class MainStore {
    constructor() {
        makeAutoObservable(this)
    }
    data = null;
    setData(data) {
        this.data = data;
    }
}
export default new MainStore();