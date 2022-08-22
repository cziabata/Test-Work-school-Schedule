import * as S from "../../styled_components/table";
import { ScheduleItem } from "../table/ScheduleItem";

export const EleventhClassWeeklySchedule = ({data}) => {
    return(
        <>
            <S.EleventhClassMondaySchedule><ScheduleItem data={data}/></S.EleventhClassMondaySchedule>
            <S.EleventhClassTuesdaySchedule><ScheduleItem data={data}/></S.EleventhClassTuesdaySchedule>
            <S.EleventhClassWednesdaySchedule><ScheduleItem data={data}/></S.EleventhClassWednesdaySchedule>
            <S.EleventhClassThursdaySchedule><ScheduleItem data={data}/></S.EleventhClassThursdaySchedule>
            <S.EleventhClassFridaySchedule><ScheduleItem data={data}/></S.EleventhClassFridaySchedule>
        </>
    )
}