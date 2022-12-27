import React from "react";

//id값 추가
const students = [
    {
        id: 1,
        name: "Inje",
    },
    {
        id: 2,
        name: "Steve",
    },
    {
        id: 3,
        name: "Bill",
    },
    {
        id: 4,
        name: "Jeff",
    },
];

/*
const students = [
    {
        name: "Inje",
    },
    {
        name: "Steve",
    },
    {
        name: "Bill",
    },
    {
        name: "Jeff",
    },
];
*/



function AttendanceBook(props) {
    return (
        /*
        <ul>
            {students.map((student) => {
                return <li>{student.name}</li>;
            })}
        </ul>
        */
       /* id를 key값으로 사용하는 경우
        <ul>            
            {students.map((student) => {
                return <li key={student.id}>{student.name}</li>;
            })}  
        </ul>
        */
       /* 포멧팅된 문자열을 키 값으로 사용하는 경우
        <ul> 
            {students.map((student,index) => {
                return <li key={`student-id-${student.id}`}>{student.name}</li>;
            })}
        </ul>
        */   
        //배열의 인덱스를 키 값으로 사용하는 경우
        <ul> 
            {students.map((student,index) => {
                return <li key={index}>{student.name}</li>;
            })}
         </ul>
    );
}

export default AttendanceBook;