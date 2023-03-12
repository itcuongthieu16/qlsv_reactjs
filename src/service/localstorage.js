import uuid from "react-uuid";

export const getListStudents = () => {
    if (!localStorage["students"]) {
        localStorage["students"] = "[]";
    }

    let students = localStorage["students"];
    students = JSON.parse(students);
    return students;
};

export const addStudent = (student) => {
    const students = getListStudents();
    students.push({ id: uuid, ...student });
    localStorage["students"] = JSON.stringify(students);
    console.log(student);
};

export const removeStudent = (id) => {
    let students = getListStudents();
    students = students.filter((student) => student.id !== id);
    localStorage["students"] = JSON.stringify(students);
};

export const getStudentById = (id) => {
    const students = getListStudents();
    const student = students.find((student) => student.id === id);
    return student;
};

export const editStudent = (id, newStudent) => {
    let students = getListStudents();
    students = students.filter((student) => student.id !== id);
    students.push(newStudent);
    localStorage["students"] = JSON.stringify(students);
};
