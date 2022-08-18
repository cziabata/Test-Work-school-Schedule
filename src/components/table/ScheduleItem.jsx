import { useState, useEffect } from "react";
import * as S from "../../styled_components/schedule";
import { createSchedule } from "../../utils/createSchedule";
import _ from "lodash";

export const ScheduleItem = ({data}) => {

    const [daySchedule, setDaySchedule] = useState(null)

    useEffect(()=>{
        setDaySchedule(createSchedule(_.cloneDeep(data)))
    }, [data])

    console.log(daySchedule)

    return (
        <>
            { daySchedule && daySchedule.map((lesson, index) => 
                <S.ScheduleLessonItem draggable={true} key={lesson.subject.id}>
                    <S.LessonNumber>{index+1}</S.LessonNumber>
                    <S.Lesson>{lesson.subject.name}</S.Lesson>
                    <S.Teacher>{lesson.subjectTeacher}</S.Teacher>
                    <S.Room>{lesson.room}</S.Room>
                </S.ScheduleLessonItem>
            )}
        </>  
    )
}