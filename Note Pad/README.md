# Notes App ---

## Description ---

This project is a simple Notes App built using HTML, CSS, and JavaScript. It allows users to create, edit, and delete notes. The notes are saved in the browser's local storage, ensuring that they persist even after refreshing the page.

## Technologies Used ---

- **HTML**: Structure of the Notes App.

- **CSS**: Styling and layout.

- **JavaScript**: Logic for creating, editing, deleting, and saving notes.

## Features ---

- Users can create new notes.

- Notes are editable using the `contenteditable` attribute.

- Notes are stored in **local storage**, so they remain available after a page reload.

- Users can delete notes.

- Clean and user-friendly UI.

## Installation & Usage ---

1. Clone the repository: git clone https://github.com/Rohit9102/notes-app.git

2. Open the project folder.

3. Run index.html in a browser.

4. Click the "Create Notes" button to add a new note.

5. Click the delete icon to remove a note.

6. Notes are automatically saved.


## Code Structure ---

## HTML (index.html)

    Defines the layout of the Notes App.

    Includes a div container for notes.

    Provides a Create Notes button.

## CSS (style.css)

    Styles the Notes App UI.

    Uses a gradient background for a modern look.

    Includes responsive design for different screen sizes.

## JavaScript (script.js)

   Handles note creation and deletion.

   Uses localStorage to save and retrieve notes.

   Listens for user interactions (adding, editing, deleting).


## How the Code Works ---

## Saving Notes
    Whenever a new note is added or modified, the saveData() function updates localStorage.

## Loading Notes
On page load, the showNotes() function retrieves saved notes from localStorage and displays them.

## Deleting Notes
Clicking the delete button removes a note from the DOM and localStorage.


## Improvements & Suggestions ---

Add a title for each note.

Allow users to change the background color of notes.

Implement a search feature to find specific notes.

Add a sync feature with a backend database.

## License ---
This project is open-source and available under the MIT License.