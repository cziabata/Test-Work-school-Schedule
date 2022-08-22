import * as S from "../../styled_components/table";
import { FifthClassWeeklySchedule } from "../5_class/FifthClassWeeklySchedule";
import { SixthClassWeeklySchedule } from "../6_class/SixthClassWeeklySchedule";
import { SeventhClassWeeklySchedule } from "../7_class/SeventhClassWeeklySchedule";
import { EighthClassWeeklySchedule } from "../8_class/EighthClassWeeklySchedule";
import { NinthClassWeeklySchedule } from "../9_class/NinthClassWeeklySchedule";
import { TenthClassWeeklySchedule } from "../10_class/TenthClassWeeklySchedule";
import { EleventhClassWeeklySchedule } from "../11_class/EleventhClassWeeklySchedule";

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

                <S.DaysGridContainer>
                <S.MondayCell><div>Понеділок</div></S.MondayCell>
                <S.TuesdayCell><div>Вівторок</div></S.TuesdayCell>
                <S.WednesdayCell><div>Середа</div></S.WednesdayCell>
                <S.ThursdayCell><div>Четвер</div></S.ThursdayCell>
                <S.FridayCell><div>П'ятниця</div></S.FridayCell>
                </S.DaysGridContainer>
                

                <FifthClassWeeklySchedule />

                {/* <SixthClassWeeklySchedule data={data} />
                <SeventhClassWeeklySchedule data={data} />
                <EighthClassWeeklySchedule data={data} />
                <NinthClassWeeklySchedule data={data} />
                <TenthClassWeeklySchedule data={data} />
                <EleventhClassWeeklySchedule data={data} /> */}
    
            </S.TableLayout>
        </>
    )
}