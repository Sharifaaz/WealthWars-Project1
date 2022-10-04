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
    console.log(rightIdx)
    console.log(leftIdx)
    gameLogic(leftIdx,rightIdx)

}

// Adding an Event Listener to the "Rest Button" and creating a function that rest the game.

let continueButton =document.getElementById("continueBtn")
continueButton.addEventListener("click", gameLogic)


// lIdx : Parameter that returns the random array index of the arrLeft.
// rIdx : Parameter that returns the random array index of the arrRight.


 let yourNetWorth = document.getElementById ("net-worth")
 let yourAssets = document.getElementById("assets")
 let futureNetWorth = document.getElementById("net-worth-future")
 let futureAssets = document.getElementById("future-assets")
 let finalResult = document.getElementById("Result")

 function gameLogic (lIdx,rIdx) {
 


    if (lIdx < rIdx) {
        if (lIdx ==='0') {
        yourNetWorth = yourNetWorth + 248;   
        yourAssets = yourAssets + 1;
        console.log (`Your Net Worth: $${yourNetWorth}B`)
        console.log (`Your Assets:${yourAssets}`)
    }
    else if (lIdx === '1') 
    {
        yourNetWorth = yourNetWorth + 136
        yourAssets = yourAssets + 1;
        console.log (`Your Net Worth: $${yourNetWorth}B`)
        console.log (`Your Assets:${yourAssets}`)
    }
    else if (lIdx === '2') {
        yourNetWorth = yourNetWorth + 103;   
        yourAssets = yourAssets + 1;
        console.log (`Your Net Worth: $${yourNetWorth}B`)
        console.log (`Your Assets:${yourAssets}`)

    }
    else if (lIdx === '3') {
        yourNetWorth = yourNetWorth + 90;   
        yourAssets = yourAssets + 1;
        console.log (`Your Net Worth: $${yourNetWorth}B`)
        console.log (`Your Assets:${yourAssets}`)
    }
    else if (lIdx === '4')
    { 
        yourNetWorth = yourNetWorth + 85;   
        yourAssets = yourAssets + 1;
        console.log (`Your Net Worth: $${yourNetWorth}B`)
        console.log (`Your Assets:${yourAssets}`)

    }
    else if (lIdx === '5') {
        yourNetWorth = yourNetWorth + 82;   
        yourAssets = yourAssets + 1;
        console.log (`Your Net Worth: $${yourNetWorth}B`)
        console.log (`Your Assets:${yourAssets}`)
    }
    else if (lIdx === '6') {
        yourNetWorth = yourNetWorth + 79;   
        yourAssets = yourAssets + 1;
        console.log (`Your Net Worth: $${yourNetWorth}B`)
        console.log (`Your Assets:${yourAssets}`)
    }
else if (lIdx === '7') {
    yourNetWorth = yourNetWorth + 50;   
    yourAssets = yourAssets + 1;
    console.log (`Your Net Worth: $${yourNetWorth}B`)
    console.log (`Your Assets:${yourAssets}`)
}
}
else if (rIdx < lIdx)
{ 
    if (rIdx === '0')
    
    futureNetWorth = futureNetWorth + 248;
    futureAssets = futureAssets + 1
    console.log(`Future Net Worth: $${futureNetWorth}B`)
    console.log(`Future Assets: ${futureAssets}`)

    else if (rIdx ==='1')
{
    futureNetWorth = futureNetWorth + 136;
    futureAssets = futureAssets + 1
    console.log(`Future Net Worth: $${futureNetWorth}B`)
    console.log(`Future Assets: ${futureAssets}`)  
}
else if (rIdx === '2') 
{
    futureNetWorth = futureNetWorth + 103;
    futureAssets = futureAssets + 1
    console.log(`Future Net Worth: $${futureNetWorth}B`)
    console.log(`Future Assets: ${futureAssets}`)
}
else if (rIdx === '3') 
{
    futureNetWorth = futureNetWorth + 90;
    futureAssets = futureAssets + 1
    console.log(`Future Net Worth: $${futureNetWorth}B`)
    console.log(`Future Assets: ${futureAssets}`)
}
else if (rIdx === '4')
{
    futureNetWorth = futureNetWorth + 85;
    futureAssets = futureAssets + 1
    console.log(`Future Net Worth: $${futureNetWorth}B`)
    console.log(`Future Assets: ${futureAssets}`)
}
else if (rIdx === '5') 
{
    futureNetWorth = futureNetWorth + 82;
    futureAssets = futureAssets + 1
    console.log(`Future Net Worth: $${futureNetWorth}B`)
    console.log(`Future Assets: ${futureAssets}`)
}
else if (rIdx === '6') 
{
    futureNetWorth = futureNetWorth + 79;
    futureAssets = futureAssets + 1
    console.log(`Future Net Worth: $${futureNetWorth}B`)
    console.log(`Future Assets: ${futureAssets}`)
}
 else if (rIdx === '7')
 {
    futureNetWorth = futureNetWorth + 50;
    futureAssets = futureAssets + 1
    console.log(`Future Net Worth: $${futureNetWorth}B`)
    console.log(`Future Assets: ${futureAssets}`)
 }
 }
 else if (rIdx === lIdx){
 console.log (`Wealth Wars`)
 }
 gameResult(yourNetWorth,yourAssets,futureNetWorth,futureAssets)
 }
  
// Function that Compares between the Net-Worth, the Future Net-Worth, Assets and future Assets. 
 function gameResult (netResult,  futureNetResult) {
    if (netResult > futureNetResult) {
  finalResult.innerHTML="Congragulation! Your Net Worth is $" + netResult + "B"
    }
    else if (netResult < futureNetResult)
    {
        finalResult.innerHTML = "Ops! don't worry you have a bright future ahead."
    }
}


// Adding an event listener to the rest button 
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