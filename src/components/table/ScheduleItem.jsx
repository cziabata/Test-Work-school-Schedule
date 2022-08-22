import { useState, useEffect } from "react";
import * as S from "../../styled_components/schedule";
import { DARK_PINK_COLOR, APP_BACKGROUND_COLOR } from "../../styled_components/variables";


export const ScheduleItem = ({data, weeklyBoards}) => {
    
    const [lessonsData, setLessonsData] = useState(null);
    const [draggableLesson, setDraggableLesson] = useState(null);

    useEffect(()=>{
        setLessonsData(data)
    }, [data])

    const changeLessonsOrder = (lesson, draggableLesson) => {
       let orderedLessons = lessonsData.daySchedule.map(les => {
        if(les.id === lesson.id) {
            return {...les, order: draggableLesson.order}
        }
        if(les.id === draggableLesson.id) {
            return {...les, order: lesson.order}
        }
        return les;
    })
    let orderedLessonsData = {...lessonsData, daySchedule: orderedLessons}
        setLessonsData(orderedLessonsData)
    }
    const sortLessons = (a, b) => {
        if(a.order > b.order) {
            return 1
        } else {
            return -1
        }
    }

    const handleOnDragStart = (e, lesson) => {
        e.target.style.background = DARK_PINK_COLOR;
        setDraggableLesson(lesson);
    }
    const handleOnDragEnd = (e) => {
        e.target.style.background = APP_BACKGROUND_COLOR;
    }
    const handleOnDragLeave = (e) => {

    }
    const handleOnDragOver = (e) => {
        e.preventDefault();
        
    }
    const handleOnDrop = (e, lesson) => {
        e.preventDefault();
        changeLessonsOrder(lesson, draggableLesson)
    }

    return (
        <>
            { lessonsData && lessonsData.daySchedule.sort(sortLessons).map((lesson) => 
                <S.ScheduleLessonItem draggable={true} 
                                      onDragStart={(e)=>handleOnDragStart(e, lesson)} 
                                      onDragEnd={(e)=>handleOnDragEnd(e)} 
                                      onDragLeave={(e)=>handleOnDragLeave(e)}
                                      onDragOver={(e)=>handleOnDragOver(e)}
                                      onDrop={(e)=>handleOnDrop(e, lesson)}
                                      key={lesson.subject.id}>
                    <S.LessonNumber>{lesson.order}</S.LessonNumber>
                    <S.Lesson>{lesson.subject.name}</S.Lesson>
                    <S.Teacher>{lesson.subjectTeacher}</S.Teacher>
                    <S.Room>{lesson.room}</S.Room>
                </S.ScheduleLessonItem>
            )}
        </>  
    )
}