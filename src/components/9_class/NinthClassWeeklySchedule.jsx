import * as S from "../../styled_components/table";
import { ScheduleItem } from "../table/ScheduleItem";

export const NinthClassWeeklySchedule = ({data}) => {
    return(
        <>
            <S.NinthClassMondaySchedule><ScheduleItem data={data}/></S.NinthClassMondaySchedule>
            <S.NinthClassTuesdaySchedule><ScheduleItem data={data}/></S.NinthClassTuesdaySchedule>
            <S.NinthClassWednesdaySchedule><ScheduleItem data={data}/></S.NinthClassWednesdaySchedule>
            <S.NinthClassThursdaySchedule><ScheduleItem data={data}/></S.NinthClassThursdaySchedule>
            <S.NinthClassFridaySchedule><ScheduleItem data={data}/></S.NinthClassFridaySchedule>
        </>
    )
}