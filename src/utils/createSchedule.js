import { getRandomIntInDiapasone, getRandomIntFromZeroToMax } from "./getRandomNumber";
import { findSubjectTeacher } from "./findSubjectTeacher";
import { createRoomsList } from "./createRoomsList";

export const createSchedule = (data) => {

    let subjectsList = [];
    let availableSubjectsList = data.subjects;
    let availableTeachersList = data.teachers;
    let lessonsAmount = getRandomIntInDiapasone(5, 8);
    let rooms = createRoomsList(data, lessonsAmount)

    for(let i = 0; i < lessonsAmount; i++) {

        let index = getRandomIntFromZeroToMax(availableSubjectsList.length);
        let pushingSubjectId = availableSubjectsList[index].id;
        let teacherID = findSubjectTeacher(availableTeachersList, pushingSubjectId);
        let teacherName = availableTeachersList.filter(teacher => teacher.id === teacherID)[0].name;

        subjectsList.push({
            id: i, 
            subject:availableSubjectsList[index],
            subjectTeacher: teacherName,
            room: rooms[i]
        })
        availableSubjectsList.splice(index, 1)
    }
    
    return subjectsList;
}