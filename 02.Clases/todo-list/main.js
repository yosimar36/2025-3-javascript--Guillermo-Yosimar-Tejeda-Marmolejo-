"use strict";

function addTask(){

        const li = document.createElement('li');
        li.innerHTML = `
        <span onClick='toggleComplete(this)'> ${taskText}</span>
        <div class='task-buttons'>
        <button onClick='deleteTask(this)'>Delete</button>
        </div>
        `;
        document.getElementById('taskList').appendChild(li);
        input.value = '';
    }

function deleteTask(btn){
    btn.closest('li').remove();
}

function toggleComplete(span){
    span.classList.toggle('task-complete');
}