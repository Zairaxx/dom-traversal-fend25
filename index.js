let allBtns = document.querySelectorAll("button");

function deleteBox(event){
    console.log("Hej");
        // H2 är dess sibling
        // let h2 = event.target.previousElementSibling;

        // // Div är dess parent
        // let bigBox = event.target.parentElement;
        // bigBox.remove();
        
        // console.log(event.target.parentElement);

}

allBtns.forEach((btn) => {

    btn.addEventListener("click", deleteBox)

})