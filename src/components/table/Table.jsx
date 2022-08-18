import * as S from "../../styled_components/table";
import { ScheduleItem } from "./ScheduleItem";

export const Table = ({data}) => {
    return(
        <>
            <S.TableLayout>
                <S.InfoCell>Розклад Занять</S.InfoCell>

                <S.FifthClassCell><div>5 Клас</div></S.FifthClassCell>
                <S.SixthClassCell><div>6 Клас</div></S.SixthClassCell>
                <S.SeventhClassCell><div>7 Клас</div></S.SeventhClassCell>
                <S.EighthClassCell><div>8 Клас</div></S.EighthClassCell>
                <S.NinthClassCell><div>9 Клас</div></S.NinthClassCell>
                <S.TenthClassCell><div>10 Клас</div></S.TenthClassCell>
                <S.EleventhClassCell><div>11 Клас</div></S.EleventhClassCell>

                <S.MondayCell><div>Понеділок</div></S.MondayCell>
                <S.TuesdayCell><div>Вівторок</div></S.TuesdayCell>
                <S.WednesdayCell><div>Середа</div></S.WednesdayCell>
                <S.ThursdayCell><div>Четвер</div></S.ThursdayCell>
                <S.FridayCell><div>П'ятниця</div></S.FridayCell>

                <S.FifthClassMondaySchedule><ScheduleItem data={data}/></S.FifthClassMondaySchedule>
                <S.FifthClassTuesdaySchedule><ScheduleItem data={data}/></S.FifthClassTuesdaySchedule>
                <S.FifthClassWednesdaySchedule><ScheduleItem data={data}/></S.FifthClassWednesdaySchedule>
                <S.FifthClassThursdaySchedule><ScheduleItem data={data}/></S.FifthClassThursdaySchedule>
                <S.FifthClassFridaySchedule><ScheduleItem data={data}/></S.FifthClassFridaySchedule>

                <S.SixthClassMondaySchedule><ScheduleItem data={data}/></S.SixthClassMondaySchedule>
                <S.SixthClassTuesdaySchedule><ScheduleItem data={data}/></S.SixthClassTuesdaySchedule>
                <S.SixthClassWednesdaySchedule><ScheduleItem data={data}/></S.SixthClassWednesdaySchedule>
                <S.SixthClassThursdaySchedule><ScheduleItem data={data}/></S.SixthClassThursdaySchedule>
                <S.SixthClassFridaySchedule><ScheduleItem data={data}/></S.SixthClassFridaySchedule>

                <S.SeventhClassMondaySchedule><ScheduleItem data={data}/></S.SeventhClassMondaySchedule>
                <S.SeventhClassTuesdaySchedule><ScheduleItem data={data}/></S.SeventhClassTuesdaySchedule>
                <S.SeventhClassWednesdaySchedule><ScheduleItem data={data}/></S.SeventhClassWednesdaySchedule>
                <S.SeventhClassThursdaySchedule><ScheduleItem data={data}/></S.SeventhClassThursdaySchedule>
                <S.SeventhClassFridaySchedule><ScheduleItem data={data}/></S.SeventhClassFridaySchedule>

                <S.EighthClassMondaySchedule><ScheduleItem data={data}/></S.EighthClassMondaySchedule>
                <S.EighthClassTuesdaySchedule><ScheduleItem data={data}/></S.EighthClassTuesdaySchedule>
                <S.EighthClassWednesdaySchedule><ScheduleItem data={data}/></S.EighthClassWednesdaySchedule>
                <S.EighthClassThursdaySchedule><ScheduleItem data={data}/></S.EighthClassThursdaySchedule>
                <S.EighthClassFridaySchedule><ScheduleItem data={data}/></S.EighthClassFridaySchedule>

                <S.NinthClassMondaySchedule><ScheduleItem data={data}/></S.NinthClassMondaySchedule>
                <S.NinthClassTuesdaySchedule><ScheduleItem data={data}/></S.NinthClassTuesdaySchedule>
                <S.NinthClassWednesdaySchedule><ScheduleItem data={data}/></S.NinthClassWednesdaySchedule>
                <S.NinthClassThursdaySchedule><ScheduleItem data={data}/></S.NinthClassThursdaySchedule>
                <S.NinthClassFridaySchedule><ScheduleItem data={data}/></S.NinthClassFridaySchedule>

                <S.TenthClassMondaySchedule><ScheduleItem data={data}/></S.TenthClassMondaySchedule>
                <S.TenthClassTuesdaySchedule><ScheduleItem data={data}/></S.TenthClassTuesdaySchedule>
                <S.TenthClassWednesdaySchedule><ScheduleItem data={data}/></S.TenthClassWednesdaySchedule>
                <S.TenthClassThursdaySchedule><ScheduleItem data={data}/></S.TenthClassThursdaySchedule>
                <S.TenthClassFridaySchedule><ScheduleItem data={data}/></S.TenthClassFridaySchedule>

                <S.EleventhClassMondaySchedule><ScheduleItem data={data}/></S.EleventhClassMondaySchedule>
                <S.EleventhClassTuesdaySchedule><ScheduleItem data={data}/></S.EleventhClassTuesdaySchedule>
                <S.EleventhClassWednesdaySchedule><ScheduleItem data={data}/></S.EleventhClassWednesdaySchedule>
                <S.EleventhClassThursdaySchedule><ScheduleItem data={data}/></S.EleventhClassThursdaySchedule>
                <S.EleventhClassFridaySchedule><ScheduleItem data={data}/></S.EleventhClassFridaySchedule>
            </S.TableLayout>
        </>
    )
}