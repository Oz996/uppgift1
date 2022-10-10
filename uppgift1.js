function guessNumber(){

   var randomNum = Math.floor(Math.random()*101);
   
 
   console.log(randomNum)

   var guess; 
   guess = prompt("Skriv in ett nummer mellan 0 och 100")
   
   console.log("Din gissning är "+ guess)


if (guess < randomNum) {

    window.alert("För lågt!")
    console.log("För lågt!")
    output.outerHTML ("För lågt, gissa igen")
}
else if (guess > randomNum) {
    window.alert("För högt!")
    console.log("För högt!")
}
else if (guess == randomNum){
    window.alert("Rätt! Du vann!")
    console.log("Rätt! Du vann!")
}

}