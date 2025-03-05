const notesContainer = document.querySelector(".notes-container");

const createBtn = document.querySelector(".btn");

let notes = document.querySelectorAll(".input-box");


// Function to save notes in local storage
function saveData(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}


// Function to load saved notes
function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}

showNotes();


// Event Listener: Create a new note
createBtn.addEventListener("click", () =>{
    let inputBox = document.createElement("p");

    let img = document.createElement("img");

    inputBox.className = "input-box";

    inputBox.setAttribute("contenteditable", "true");

    img.src = "images/delete.png";

    notesContainer.appendChild(inputBox).appendChild(img);

    saveData();
});



// Event Listener: Handle note editing & deletion
notesContainer.addEventListener("click", (e) => {
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();

        saveData();
    }

    else if(e.target.tagName === "p"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach( nt => {
            nt.onkeyup = function(){
                saveData();

            }
        })
    }
})


// Prevent Enter key from submitting and instead create a new line
document.addEventListener("keydown", event =>{

    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event-preventDefault();
    }
})

