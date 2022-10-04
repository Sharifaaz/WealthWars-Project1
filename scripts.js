// There will be several fuctions for the game
// First we need a function that initialize the game.
console.log(

)

const ElonLeft = document.getElementById("Elon-Musk-left")
const JeffLeft = document.getElementById("Jeff-Bezos-left")
const BillLeft = document.getElementById("Bill-gates-left")
const MarkLeft = document.getElementById("Mark-Zuck-left")
const LarryPLeft = document.getElementById("Larry-Page-left")
const SergeyLeft = document.getElementById("Sergey-Brin-left")
const SteveLeft = document.getElementById("Steve-Ballmer-left")
const LarryELeft = document.getElementById("Larry-Ellison-left")

// Grabbing the imgs on the right section

const ElonRight = document.getElementById("Elon-Musk-right")
const JeffRight = document.getElementById("Jeff-Bezos-right")
const BillRight = document.getElementById("Bill-gates-right")
const MarkRight = document.getElementById("Mark-Zuck-right")
const LarryPRight = document.getElementById("Larry-Page-right")
const SergeyRight = document.getElementById("Sergey-Brin-right")
const SteveRight = document.getElementById("Steve-Ballmer-right")
const LarryERight = document.getElementById("Larry-Ellison-right")
let leftCard
let rightCard

// Creating an Array of the whole list of imgs so I could choose it in the Random function that would shuffle the imgs randomly.
let arrLeft = [ElonLeft,JeffLeft,BillLeft, MarkLeft, LarryPLeft, SergeyLeft,SteveLeft, LarryELeft ]

// Creating an Array of the right section of imgs
let arrRight = [ElonRight, JeffRight, BillRight, MarkRight, LarryERight, SergeyRight, SteveRight,LarryERight]


let startBtn=document.querySelector("#start")
startBtn.addEventListener("click", startsFun)
 
function startsFun (event) {
    console.log("Starting")
    
    flipCards()
}


function flipCards() {
    
    rightIdx=Math.floor(Math.random()*7)
    leftIdx=Math.floor(Math.random() * 7)
    rightCard = arrRight[leftIdx]
    leftCard = arrLeft[rightIdx]
    // flip random card from left and right
    rightCard.style.display = 'block'
    leftCard.style.display = 'block'
    console.log (rightCard)
    console.log(leftCard)
    gameResult(leftIdx,rightIdx)
}

// Adding an Event Listener to the "Rest Button" and creating a function that rest the game.

let continueButton =document.getElementById("continueBtn")
continueButton.addEventListener("click", gameResult)


function gameResult () {



}

let restBtn = document.getElementById("RestBtn")
restBtn.addEventListener("click", restGame)

function restGame () {

// resting the right side imgs
 document.getElementById("Elon-Musk-right").style.display='none'
 document.getElementById("Jeff-Bezos-right").style.display='none'
 document.getElementById("Bill-gates-right").style.display='none'
 document.getElementById("Mark-Zuck-right").style.display='none'
 document.getElementById("Larry-Page-right").style.display='none'
 document.getElementById("Sergey-Brin-right").style.display='none'
 document.getElementById("Steve-Ballmer-right").style.display='none'
 document.getElementById("Larry-Ellison-right").style.display='none'
// resting the left side imgs
document.getElementById("Elon-Musk-left").style.display='none'
document.getElementById("Jeff-Bezos-left").style.display='none'
document.getElementById("Bill-gates-left").style.display='none'
document.getElementById("Mark-Zuck-left").style.display='none'
document.getElementById("Larry-Page-left").style.display='none'
document.getElementById("Sergey-Brin-leftt").style.display='none'
document.getElementById("Steve-Ballmer-left").style.display='none'
document.getElementById("Larry-Ellison-left").style.display='none'
}