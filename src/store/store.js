import { makeAutoObservable } from "mobx";
import { createClassWeeklyScheduleData } from "../utils/createClassWeeklySchedule";

class Store {
    constructor() {
        makeAutoObservable(this)
    }

    data = null;
    fifthClassWeeklySchedule = null; 

    setData(data) {
        this.data = data;
    }
    
    setFifthClassWeeklySchedule(data) {
        this.fifthClassWeeklySchedule = createClassWeeklyScheduleData(data)
    }


}
export default new Store;