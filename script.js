let pendingList = document.getElementById("pendingList");
let completedList = document.getElementById("completedList");

function addTask() {
    let taskText = document.getElementById("taskInput").value;

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    let taskInfo = document.createElement("div");
    taskInfo.innerHTML = taskText + 
        "<small>Added on: " + new Date().toLocaleString() + "</small>";

    let doneBtn = document.createElement("button");
    doneBtn.innerText = "Done";
    doneBtn.onclick = function () {
        completedList.appendChild(li);
        doneBtn.remove();
    };

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(taskInfo);
    li.appendChild(doneBtn);
    li.appendChild(deleteBtn);

    pendingList.appendChild(li);
    document.getElementById("taskInput").value = "";
}