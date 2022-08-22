import * as S from "../../styled_components/table";
import { ScheduleItem } from "../table/ScheduleItem";

export const TenthClassWeeklySchedule = ({data}) => {
    return(
        <>
            <S.TenthClassMondaySchedule><ScheduleItem data={data}/></S.TenthClassMondaySchedule>
            <S.TenthClassTuesdaySchedule><ScheduleItem data={data}/></S.TenthClassTuesdaySchedule>
            <S.TenthClassWednesdaySchedule><ScheduleItem data={data}/></S.TenthClassWednesdaySchedule>
            <S.TenthClassThursdaySchedule><ScheduleItem data={data}/></S.TenthClassThursdaySchedule>
            <S.TenthClassFridaySchedule><ScheduleItem data={data}/></S.TenthClassFridaySchedule>
        </>
    )
}