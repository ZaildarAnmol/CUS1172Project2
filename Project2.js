
document.addEventListener("DOMContentLoaded", function() {
    const taskForm = document.getElementById("taskForm");
    const taskList = document.getElementById("taskList");
    const tasks = [];

    taskForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const taskTitle = document.getElementById("taskTitle").value;
        const taskPriority = document.getElementById("taskPriority").value;
        const taskStatus = "not completed";

        const task = {
            title: taskTitle,
            priority: taskPriority,
            status: taskStatus
        };

        tasks.push(task);
        addTaskToDOM(task);
        taskForm.reset();
    });

    function addTaskToDOM(task) {
        const taskItem = document.createElement("li");
        taskItem.textContent = `${task.title} - Priority: ${task.priority} - Status: ${task.status}`;
        
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", function() {
            const index = tasks.indexOf(task);
            if (index > -1) {
                tasks.splice(index, 1);
                taskItem.remove();
            }
        });

        const completeButton = document.createElement("button");
        completeButton.textContent = "Mark as Complete";
        completeButton.addEventListener("click", function() {
            task.status = "completed";
            taskItem.classList.add("taskCompleted");
            taskItem.classList.add("box");
        });

        taskItem.appendChild(removeButton);
        taskItem.appendChild(completeButton);
        taskList.appendChild(taskItem);
    }
});
