import { createSchedule } from "./createSchedule";
import { MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY } from "../utils/variables";
import _ from "lodash";

export const createClassWeeklyScheduleData = (data) => {
    
    let weekDays = [MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY];

    let classWeeklyScheduleBoardsData = weekDays.map((day, index) => ({
        id: index,
        day: day,
        daySchedule: createSchedule(_.cloneDeep(data))
    }))

    return classWeeklyScheduleBoardsData;

}