function changeBox(event){

    //event.target är alltid elementet som triggade igång eventet dvs <button>
    console.log(event.target);
        //H2 förekommer ovanför knappen i HTML, så vi kan nå den på följande sätt.
        let h2 = event.target.previousElementSibling;

        h2.style.color = "black";

        // Div är dess parent
        let bigBox = event.target.parentElement;
        
        bigBox.style.background = "darkred";

        //För att ta bort hela div:en.
        // bigBox.remove();
        
}


//Lägger till samma funktion till samtliga knappar i dokumentet.

let allBtns = document.querySelectorAll("button");

allBtns.forEach((btn) => {

    btn.addEventListener("click", changeBox)

})