import * as S from "../../styled_components/table";
import { ScheduleItem } from "../table/ScheduleItem";

export const EighthClassWeeklySchedule = ({data}) => {
    return(
        <>
            <S.EighthClassMondaySchedule><ScheduleItem data={data}/></S.EighthClassMondaySchedule>
            <S.EighthClassTuesdaySchedule><ScheduleItem data={data}/></S.EighthClassTuesdaySchedule>
            <S.EighthClassWednesdaySchedule><ScheduleItem data={data}/></S.EighthClassWednesdaySchedule>
            <S.EighthClassThursdaySchedule><ScheduleItem data={data}/></S.EighthClassThursdaySchedule>
            <S.EighthClassFridaySchedule><ScheduleItem data={data}/></S.EighthClassFridaySchedule>
        </>
    )
}