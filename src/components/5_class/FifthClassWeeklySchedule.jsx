import * as S from "../../styled_components/table";
import * as SS from "../../styled_components/schedule";
import { useState } from "react";
import { DARK_PINK_COLOR, APP_BACKGROUND_COLOR } from "../../styled_components/variables";
import { observer } from "mobx-react-lite";
import store from "../../store/store";



export const FifthClassWeeklySchedule = observer(() => {

  const [draggableLesson, setDraggableLesson] = useState(null);
  const [currentBoard, setCurrentBoard] = useState(null);

  const sortLessons = (a, b) => {
    if(a.order > b.order) {
        return 1
    } else {
        return -1
    }
}

const handleOnDragStart = (e, lesson, board) => {
    e.target.style.background = DARK_PINK_COLOR;
    setDraggableLesson(lesson);
    setCurrentBoard(board);
}
const handleOnDragEnd = (e) => {
    e.target.style.background = APP_BACKGROUND_COLOR;
}
const handleOnDragLeave = (e) => {

}
const handleOnDragOver = (e) => {
    e.preventDefault();
    
}
const handleOnDrop = (e, lesson, board) => {
    e.preventDefault();
    //changeLessonsOrder(lesson, draggableLesson)
    if(lesson === draggableLesson) return
    
    const currentIndex = currentBoard.daySchedule.indexOf(draggableLesson);
    currentBoard.daySchedule.splice(currentIndex, 1);
    const dropIndex = board.daySchedule.indexOf(lesson);
    board.daySchedule.splice( board===currentBoard &&  lesson.order < draggableLesson.order ? dropIndex : dropIndex+1, 0, draggableLesson);
    store.changeFifthClassWeeklySchedule(store.fifthClassWeeklySchedule.map(b => {
        if(b.id === board.id) {
            return board
        }
        if(b.id === currentBoard.id) {
            return currentBoard
        }
        return b
    }))
} 
  return (
    <S.FifthClassWeeklySchedule>{store.fifthClassWeeklySchedule.map((dayBoardData, index) => <S.DayScheduleCell>
      {dayBoardData.daySchedule.map((lesson) => 
                <SS.ScheduleLessonItem draggable={true} 
                                      onDragStart={(e)=>handleOnDragStart(e, lesson, store.fifthClassWeeklySchedule[index])} 
                                      onDragEnd={(e)=>handleOnDragEnd(e)} 
                                      onDragLeave={(e)=>handleOnDragLeave(e)}
                                      onDragOver={(e)=>handleOnDragOver(e)}
                                      onDrop={(e)=>handleOnDrop(e, lesson, store.fifthClassWeeklySchedule[index])}
                                      key={lesson.subject.id}>
                    <SS.LessonNumber>{lesson.order}</SS.LessonNumber>
                    <SS.Lesson>{lesson.subject.name}</SS.Lesson>
                    <SS.Teacher>{lesson.subjectTeacher}</SS.Teacher>
                    <SS.Room>{lesson.room}</SS.Room>
                </SS.ScheduleLessonItem>
            )}
    </S.DayScheduleCell>)}</S.FifthClassWeeklySchedule>
  );
});
