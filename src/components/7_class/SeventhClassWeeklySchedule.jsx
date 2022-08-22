import * as S from "../../styled_components/table";
import { ScheduleItem } from "../table/ScheduleItem";

export const SeventhClassWeeklySchedule = ({data}) => {
    return(
        <>
            <S.SeventhClassMondaySchedule><ScheduleItem data={data}/></S.SeventhClassMondaySchedule>
            <S.SeventhClassTuesdaySchedule><ScheduleItem data={data}/></S.SeventhClassTuesdaySchedule>
            <S.SeventhClassWednesdaySchedule><ScheduleItem data={data}/></S.SeventhClassWednesdaySchedule>
            <S.SeventhClassThursdaySchedule><ScheduleItem data={data}/></S.SeventhClassThursdaySchedule>
            <S.SeventhClassFridaySchedule><ScheduleItem data={data}/></S.SeventhClassFridaySchedule>
        </>
    )
}