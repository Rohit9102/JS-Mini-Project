To-Do List App --- 

Description ---

This is a simple To-Do List web application that allows users to add, check, and remove tasks. The application also saves the task list in the browser's local storage so that tasks persist even after refreshing the page.

Technologies Used ---

HTML

CSS

JavaScript

Features ---

Add tasks to the list.

Mark tasks as completed.

Remove tasks from the list.

Stores tasks in local storage for persistence.

How the Code Works ---

HTML

The structure consists of a container div that houses the to-do list.

An input field allows users to type tasks.

A button adds tasks to the list.

A list (ul) dynamically displays tasks.

CSS

Provides a gradient background and a centered card layout.

Styles buttons, inputs, and task items.

Uses custom icons for checked and unchecked tasks.

JavaScript

addTask(): Adds a new task to the list.

listContainer.addEventListener(): Listens for clicks to mark tasks as complete or delete them.

saveData(): Saves tasks to localStorage.

showList(): Loads stored tasks on page load.

Usage ---

Open index.html in a browser.

Type a task in the input field.

Click the "Add" button to insert the task.

Click on a task to mark it as completed.

Click the delete icon (×) to remove a task.

Notes ---

Ensure the style.css and script.js files are properly linked.

The images folder should contain icon.png, checked.png, and unchecked.png for the task icons.

No external API keys or sensitive data are used in this project.

Installation & Usage ---

Clone the repository: 

git clone https://github.com/Rohit9102/todo-list-app.git

Open index.html in a browser.

Add your tasks, mark them as complete, or delete them!



