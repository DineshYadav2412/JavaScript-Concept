//  4 Pillars of DOM



// 1. Selection of an Element
var a = document.querySelector("h1")
console.log(a)



// 2. Changing HTML
var a = document.querySelector("h1")
a.innerHTML = "Changed HTML"
// This is second way 
document.querySelector("h1").innerHTML="Ram Ram"



// 3. Changing CSS
var a = document.querySelector("h1")
a.style.color="red"
// This is second way
document.querySelector("h1").style.color="yellow"
document.querySelector("h3").style.backgroundColor="black"
document.querySelector("h3").style.color="white"
document.querySelector("body").style.backgroundColor="green"


// 4. Event Listeners
var b = document.querySelector("h3")
// b.addEventListener("click", function(){
//     console.log("Clicked")
// })

b.addEventListener("click", function(){
    b.innerHTML = "Badal gaya hu mai teri ex ki tarah"
    console.log(b)
})

var h2 = document.querySelector("h2")

h2.addEventListener("click", function(){
    h2.style.color="red"
})