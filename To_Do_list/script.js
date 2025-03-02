// Select input and task list container
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function to add a new task
function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        // Create a new <li> element
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        // Add delete button (X)
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    // Clear input field
    inputBox.value = '';

    // Save the updated task list
    saveData();
}

// Function to handle clicks on task list
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); // Toggle task completion
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove(); // Remove task when clicking (X)
    }
    
    saveData();
}, false);

// Save tasks in localStorage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Load tasks from localStorage
function showList() {
    listContainer.innerHTML = localStorage.getItem("data") || ""; // Fix to prevent null errors
}

// Display saved tasks on page load
showList();
