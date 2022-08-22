import * as S from "../../styled_components/table";
import { ScheduleItem } from "../table/ScheduleItem";

export const SixthClassWeeklySchedule = ({data}) => {
    return(
        <>
            <S.SixthClassMondaySchedule><ScheduleItem data={data}/></S.SixthClassMondaySchedule>
            <S.SixthClassTuesdaySchedule><ScheduleItem data={data}/></S.SixthClassTuesdaySchedule>
            <S.SixthClassWednesdaySchedule><ScheduleItem data={data}/></S.SixthClassWednesdaySchedule>
            <S.SixthClassThursdaySchedule><ScheduleItem data={data}/></S.SixthClassThursdaySchedule>
            <S.SixthClassFridaySchedule><ScheduleItem data={data}/></S.SixthClassFridaySchedule>
        </>
    )
}