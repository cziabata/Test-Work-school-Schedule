import { makeAutoObservable } from "mobx";
import { createClassWeeklyScheduleData } from "../utils/createClassWeeklySchedule";

class FifthClassDataStore {
    constructor() {
        makeAutoObservable(this)
    }

    fifthClassWeeklySchedule = null; 
    currentBoard = null;
    
    setFifthClassWeeklySchedule(data) {
        this.fifthClassWeeklySchedule = createClassWeeklyScheduleData(data)
        .map(day=>({
            ...day,
            daySchedule: day.daySchedule.map((lesson, index)=>({
                ...lesson,
                order: index+1
            }))}));
    }
    changeFifthClassWeeklySchedule(newSchedule) {
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
export default new FifthClassDataStore();