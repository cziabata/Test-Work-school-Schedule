import { makeAutoObservable } from "mobx";
import { createClassWeeklyScheduleData } from "../utils/createClassWeeklySchedule";

class SixthClassDataStore {
    constructor() {
        makeAutoObservable(this)
    }

    fifthClassWeeklySchedule = null; 
    currentBoard = null;
    
    setSixthClassWeeklySchedule(data) {
        this.fifthClassWeeklySchedule = createClassWeeklyScheduleData(data)
        .map(day=>({
            ...day,
            daySchedule: day.daySchedule.map((lesson, index)=>({
                ...lesson,
                order: index+1
            }))}));
    }
    changeSixthClassWeeklySchedule(newSchedule) {
        this.fifthClassWeeklySchedule = newSchedule.map(day=>({
            ...day,
            daySchedule: day.daySchedule.map((lesson, index)=>({
                ...lesson,
                order: index+1
            }))}));
    }
    setCurrentBoard(board) {
        this.currentBoard = board;
    }

}
export default new SixthClassDataStore();