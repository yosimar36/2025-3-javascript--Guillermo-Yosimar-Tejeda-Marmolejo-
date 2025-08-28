"use strict";

let students = [];

window.onload = function (){
    const stored = localStorage.getItem("students");
    if(stored){
        students = JSON.parse(stored);
        displayStudents();
        updateAverage();
    }
}
function addStudent(){
    const name = document.getElementById("nameInput").value.trim();
    if(name === "" || name === isNaN){
        alert("debes capturar un nombre valido");
        return;
    }    
    const grade = parseFloat(document.getElementById("gradeInput").value);
    if(grade > 100 || grade < 0){
        alert("debes de capturar una calificacion valida");
        return;
    }

    const student = {
        name,
        grade,
        status: grade>=70? "passed" : "failed",
    }

    students.push(student);
    displayStudents();
    updateAverage();
    saveToLocalStorage();
    document.getElementById("nameInput").value ="";
    document.getElementById("gradeInput").value ="";
}

function displayStudents(){
    const list = document.getElementById("studentList");
    list.innerHTML = ``;

    for(let i = 0; i < students.length; i++){
        const li = document.createElement("li");
        li.innerHTML =`<p>${students[i].name} - ${students[i].grade} - ${students[i].status}</p>`;
        li.classList.add(students[i].grade>=70 ? 'passed' : 'failed');
        list.appendChild(li);
    }
}

function updateAverage(){
    if(students.length === 0){
        return;
    }
    let total = 0;
    for (let i = 0; i<students.length; i++){
        total = total + students[i].grade;
    }
    let average = total / students.length;
    document.getElementById("averangeDisplay").textContent=`Averange Grade: ${average.toFixed(2)}`;
}

function saveToLocalStorage(){
    localStorage.setItem("students", JSON.stringify(students));
}