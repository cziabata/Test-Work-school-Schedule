export function findSubjectTeacher(teachersList, subjectId) {
    let teacher;
    for (let i = 0; i < teachersList.length; i++) {
        for(let j = 0; j < teachersList[i].subjects.length; j++) {
            if (teachersList[i].subjects[j] === subjectId) {
                teacher = teachersList[i].id;
            }
        }
    }
    return teacher;
}