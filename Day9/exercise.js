document.addEventListener("DOMContentLoaded", function() {
    const taskForm = document.getElementById("taskForm");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    // Function to add a task
    function addTask(event) {
        event.preventDefault(); // Prevent form submission

        const taskText = taskInput.value.trim(); // Get task text

        if (taskText !== "") {
            // Create new list item
            const listItem = document.createElement("li");
            listItem.textContent = taskText;

            // Create remove button
            const removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.className = "remove-btn";

            // Add click event to remove button
            removeButton.addEventListener("click", function() {
                listItem.remove(); // Remove task when remove button is clicked
            });

            // Append remove button to list item
            listItem.appendChild(removeButton);

            // Append list item to task list
            taskList.appendChild(listItem);

            // Clear input field
            taskInput.value = "";
        }
    }

    // Event listener for form submission
    taskForm.addEventListener("submit", addTask);

    // Function to remove a task
    function removeTask(taskItem) {
        taskItem.remove();
    }

    // Event delegation for remove buttons
    taskList.addEventListener("click", function(event) {
        if (event.target.classList.contains("remove-btn")) {
            removeTask(event.target.parentElement);
        }
    });
});
