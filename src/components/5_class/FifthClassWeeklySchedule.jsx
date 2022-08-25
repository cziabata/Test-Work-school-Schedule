import * as STI from "../../styled_components/table"; // STI - Styled Table Item
import * as SSI from "../../styled_components/schedule"; // SSI = Styled Schedule Item
import { useState } from "react";
import {
  DARK_PINK_COLOR,
  APP_BACKGROUND_COLOR,
} from "../../styled_components/variables";
import { observer } from "mobx-react-lite";
import store from "../../store/store";

export const FifthClassWeeklySchedule = observer(() => {
  const [draggableLesson, setDraggableLesson] = useState(null);
  const [currentBoard, setCurrentBoard] = useState(null);

  const handleOnDragStart = (e, lesson, board) => {
    e.target.style.background = DARK_PINK_COLOR;
    setDraggableLesson(lesson);
    setCurrentBoard(board);
  };
  const handleOnDragEnd = (e) => {
    e.target.style.background = APP_BACKGROUND_COLOR;
  };
  const handleOnDragLeave = (e) => {};
  const handleOnDragOver = (e) => {
    e.preventDefault();
  };
  const handleOnDrop = (e, lesson, board) => {
    e.preventDefault();
    if(board.daySchedule.length >= 7) return
    if (lesson === draggableLesson) return;

    const currentIndex = currentBoard.daySchedule.indexOf(draggableLesson);
    currentBoard.daySchedule.splice(currentIndex, 1);
    const dropIndex = board.daySchedule.indexOf(lesson);
    board.daySchedule.splice(
      board === currentBoard && lesson.order < draggableLesson.order
        ? dropIndex
        : dropIndex + 1,
      0,
      draggableLesson
    );
    store.changeFifthClassWeeklySchedule(
      store.fifthClassWeeklySchedule.map((b) => {
        if (b.id === board.id) {
          return board;
        }
        if (b.id === currentBoard.id) {
          return currentBoard;
        }
        return b;
      })
    );
  };
  return (
    <STI.FifthClassWeeklySchedule>
      {store.fifthClassWeeklySchedule.map((dayBoardData, index) => (
        <STI.DayScheduleCell>
          {dayBoardData.daySchedule.map((lesson) => (
            <SSI.ScheduleLessonItem
              draggable={true}
              onDragStart={(e) =>
                handleOnDragStart(
                  e,
                  lesson,
                  store.fifthClassWeeklySchedule[index]
                )
              }
              onDragEnd={(e) => handleOnDragEnd(e)}
              onDragLeave={(e) => handleOnDragLeave(e)}
              onDragOver={(e) => handleOnDragOver(e)}
              onDrop={(e) =>
                handleOnDrop(e, lesson, store.fifthClassWeeklySchedule[index])
              }
              key={lesson.subject.id}
            >
              <SSI.LessonNumber>{lesson.order}</SSI.LessonNumber>
              <SSI.Lesson>{lesson.subject.name}</SSI.Lesson>
              <SSI.Teacher>{lesson.subjectTeacher}</SSI.Teacher>
              <SSI.Room>{lesson.room}</SSI.Room>
            </SSI.ScheduleLessonItem>
          ))}
        </STI.DayScheduleCell>
      ))}
    </STI.FifthClassWeeklySchedule>
  );
});
