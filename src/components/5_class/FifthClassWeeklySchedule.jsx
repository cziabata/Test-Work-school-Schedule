import * as S from "../../styled_components/table";
import { ScheduleItem } from "../table/ScheduleItem";
import {MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY,
} from "../../utils/variables";
import { observer } from "mobx-react-lite";
import store from "../../store/store";

const schedule = (dayBoardData, index) => {
  switch (dayBoardData.day) {
    case MONDAY: {
      return (
        <S.FifthClassMondaySchedule key={dayBoardData.id}>
          <ScheduleItem
            index={index}
            dayBoard={dayBoardData}
            weeklyBoards={store.fifthClassWeeklySchedule}
          />
        </S.FifthClassMondaySchedule>
      );
    }
    case TUESDAY: {
      return (
        <S.FifthClassTuesdaySchedule key={dayBoardData.id}>
          <ScheduleItem
            index={index}
            dayBoard={dayBoardData}
            weeklyBoards={store.fifthClassWeeklySchedule}
          />
        </S.FifthClassTuesdaySchedule>
      );
    }
    case WEDNESDAY: {
      return (
        <S.FifthClassWednesdaySchedule key={dayBoardData.id}>
          <ScheduleItem
            index={index}
            dayBoard={dayBoardData}
            weeklyBoards={store.fifthClassWeeklySchedule}
          />
        </S.FifthClassWednesdaySchedule>
      );
    }
    case THURSDAY: {
      return (
        <S.FifthClassThursdaySchedule key={dayBoardData.id}>
          <ScheduleItem
            index={index}
            dayBoard={dayBoardData}
            weeklyBoards={store.fifthClassWeeklySchedule}
          />
        </S.FifthClassThursdaySchedule>
      );
    }
    case FRIDAY: {
      return (
        <S.FifthClassFridaySchedule key={dayBoardData.id}>
          <ScheduleItem
            index={index}
            dayBoard={dayBoardData}
            weeklyBoards={store.fifthClassWeeklySchedule}
          />
        </S.FifthClassFridaySchedule>
      );
    }
    default:
      return <div>...</div>;
  }
};

export const FifthClassWeeklySchedule = observer(() => {
  return (
    <S.FifthClassWeeklySchedule>{store.fifthClassWeeklySchedule.map((dayBoard, index) => schedule(dayBoard, index))}</S.FifthClassWeeklySchedule>
  );
});
