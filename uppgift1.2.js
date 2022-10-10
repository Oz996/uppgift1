let enterButton = document.getElementById("enterButton")
let againButton = document.getElementById("againButton")
let output = document.getElementById("outputText")


let randomNumber = Math.floor(Math.random()*100);

function checkNumber(){
    let input = document.getElementById("userInput").value;
    if (input == randomNumber) {
        output.innerHTML="Du gissade rätt! "+ "Din gissning var "+ randomNumber;
        output.style.color="green";
   }

   else if (input > randomNumber) {
    output.innerHTML= "Du gissade fel, för högt!"
}
   

else if (input < randomNumber) {
    output.innerHTML= "Du gissade fel, för lågt!"
   }

   else if (isNaN(input)){
    output.innerHTML= "Skriv ett giltigt nummer mellan 1-100"
   }
   else if (input>100) {
    output.innerHTML= "Numret får inte vara högre än 100"
   }
   else if (input<1) {
    output.innerHTML = "Numret får inte vara lägre än 1"
   }
}

enterButton.addEventListener("click",checkNumber)
againButton.addEventListener("click", function(){
    location.reload();
})