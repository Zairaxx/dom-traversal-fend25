//Lägga till-knappen
const addStudentBtn = document.querySelector("#addStudent");
//Dropdown-input
const educationInput = document.querySelector("#education")
//Namn på elev-input
const studentNameInput = document.querySelector("#studentName");


addStudentBtn.addEventListener("click", () => {
    
    let klass = educationInput.value;

    //Skapa upp list-item med elevens namn
    let li = document.createElement("li");
    li.innerText = studentNameInput.value;
    
    //Skapa delete-knapp
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Radera"
    li.append(deleteBtn);

    deleteBtn.addEventListener("click", (event) => {
        event.target.parentElement.remove();
    })

    //Dynamisk selector
    document.querySelector(`#${klass}-list`).append(li);
    
})