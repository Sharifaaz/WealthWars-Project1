// There will be several fuctions for the game
// First we need a function that initialize the game.


const ElonLeft = document.getElementById("Elon-Musk-left")
const JeffLeft = document.getElementById("Jeff-Bezos-left")
const BillLeft = document.getElementById("Bill-gates-left")
const MarkLeft = document.getElementById("Mark-Zuck-left")
const LarryPLeft = document.getElementById("Larry-Page-left")
const SergeyLeft = document.getElementById("Sergey-Brin-left")
const SteveLeft = document.getElementById("Steve-Ballmer-left")
const LarryELeft = document.getElementById("Larry-Ellison-left")

// Grapping the imgs on the right section

const ElonRight = document.getElementById("Elon-Musk-right")
const JeffRight = document.getElementById("Jeff-Bezos-right")
const BillRight = document.getElementById("Bill-gates-right")
const MarkRight = document.getElementById("Mark-Zuck-right")
const LarryPRight = document.getElementById("Larry-Page-right")
const SergeyRight = document.getElementById("Sergey-Brin-right")
const SteveRight = document.getElementById("Steve-Ballmer-right")
const LarryERight = document.getElementById("Larry-Ellison-right")

// Creating an Array of the whole list of imgs so I could choose it in the Random function that would shuffle the imgs randomly.
let ArrLeft = [ElonLeft,JeffLeft,BillLeft, MarkLeft, LarryPLeft, SergeyLeft,SteveLeft, LarryELeft ]

// Creating an Array of the right section of imgs
let ArrRight = [ElonRight, JeffRight, BillRight, MarkRight, LarryERight, SergeyRight, SteveRight,LarryERight]


let StartsBTN =document.getElementById("StartsBtn")
StartsBTN.addEventListener("click", StartsFun)

function StartsFun (event,shuffle) {
    console.log(shuffle.)
}