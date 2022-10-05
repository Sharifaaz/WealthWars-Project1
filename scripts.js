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
let arrRight = [ElonRight, JeffRight, BillRight, MarkRight, LarryPRight, SergeyRight, SteveRight,LarryERight]



//  let startBtn=document.querySelector("#start")

//  startBtn.addEventListener("click", startsFun)



//  function startsFun (event) {
//     console.log("Starting")
//     // flipCards()
//     alert("Hey! You won't ever lose! You are playing against your future you either get your Net Worth now in this game you are going to meet the top eight of wealthiest figures in the world! ")
//  }

let leftSectionArray = document.querySelectorAll(".left-imgs")
let rightSectionArray = document.querySelectorAll(".right-imgs")
// let rightSectionArray = document.getElementById("right-Section")

function flipCards() {
   leftSectionArray.forEach(img => {
       console.log(img)
       img.style.display = 'none'
   })    
   rightSectionArray.forEach(img => {
       img.style.display = 'none'
   })    

   rightIdx=Math.floor(Math.random()*8)
   leftIdx=Math.floor(Math.random() *8)
   rightCard = arrRight[rightIdx]
   leftCard = arrLeft[leftIdx]
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

let continueButton = document.getElementById("continueBtn")
continueButton.addEventListener("click", continueFcn)



function continueFcn (event) {
   flipCards()
   // console.log("continueing the game")
   // rightIdx=Math.floor(Math.random()*8)
   // leftIdx=Math.floor(Math.random() * 8)
   // rightCard = arrRight[leftIdx]
   // leftCard = arrLeft[rightIdx]
   // gameLogic(leftIdx,rightIdx)
}
// lIdx  Parameter that returns the random array index thats excuted by Math.random() of the arrLeft.
// rIdx : Parameter that returns the random array index of the arrRight.


let yourNetWorth = document.getElementById ("net-worth")
let yourAssets = document.getElementById("assets")
let futureNetWorth = document.getElementById("net-worth-future")
let futureAssets = document.getElementById("future-assets")
let finalResult = document.getElementById("Result")

// Parameters that stores and counts the scores of the game

let netCounter = 0
let netfutureCounter = 0
let assetsCounter = 10
let futureAssetsCounter = 10
let count=9;


function gameLogic (lIdx,rIdx) {

   if (count!=0)
   {
       count--;


   

   if (lIdx < rIdx) {
       if (lIdx =='0') {
       
       netCounter = netCounter + 248;   
       assetsCounter = assetsCounter + 1;
       futureAssetsCounter = futureAssetsCounter - 1;
       
       yourNetWorth.innerText=(`$${netCounter}B`)
       yourAssets.innerText=(`${assetsCounter} Units`)
       futureNetWorth.innerText = (` $${netfutureCounter}B`)
       futureAssets.innerText = (`${futureAssetsCounter} Units`)
       finalResult.innerHTML = ("Elon Musk's Net Worth $ 248B") 
       // for testin' purposes
       
       console.log(`Case: lIdx =='0'`)
   }
   else if (lIdx == '1') 
   {

       netCounter = netCounter + 136;   
       assetsCounter = assetsCounter + 1;
       futureAssetsCounter = futureAssetsCounter - 1;
       
       yourNetWorth.innerText=(`$${netCounter}B`)
       yourAssets.innerText=(`${assetsCounter} Units`)
       futureNetWorth.innerText = (` $${netfutureCounter}B`)
       futureAssets.innerText = (`${futureAssetsCounter} Units`)
       finalResult.innerHTML = ("Jeff Bezos's Net Worth $ 136B ") 
       // for testin' purposes
       
       console.log(`Case: lIdx =='1'`)
   }

   else if (lIdx == '2') {
       
       netCounter = netCounter + 103;   
       assetsCounter = assetsCounter + 1;
       futureAssetsCounter = futureAssetsCounter - 1;
       
       yourNetWorth.innerText=(`$${netCounter}B`)
       yourAssets.innerText=(`${assetsCounter} Units`)
       futureNetWorth.innerText = (` $${netfutureCounter}B`)
       futureAssets.innerText = (`${futureAssetsCounter} Units`)
       finalResult.innerHTML = ("Bill Gates's Net Worth $103B") 
       // for testin' purposes
       
       console.log(`Case: lIdx =='2'`)
   }
   else if (lIdx == '3') {
       
       netCounter = netCounter + 90;   
       assetsCounter = assetsCounter + 1;
       futureAssetsCounter = futureAssetsCounter - 1;
       
       yourNetWorth.innerText=(`$${netCounter}B`)
       yourAssets.innerText=(`${assetsCounter} Units`)
       futureNetWorth.innerText = (` $${netfutureCounter}B`)
       futureAssets.innerText = (`${futureAssetsCounter} Units`)
       finalResult.innerHTML = ("Mark Zuckerberg's Net Worth $ 90 B") 
       // for testin' purposes
       
       console.log(`Case: lIdx =='3'`)
   }
   else if (lIdx == '4')
   { 

       netCounter = netCounter + 85;   
       assetsCounter = assetsCounter + 1;
       futureAssetsCounter = futureAssetsCounter - 1;
       
       yourNetWorth.innerText=(`$${netCounter}B`)
       yourAssets.innerText=(`${assetsCounter} Units`)
       futureNetWorth.innerText = (` $${netfutureCounter}B`)
       futureAssets.innerText = (`${futureAssetsCounter} Units`)
       finalResult.innerHTML = ("Larry Page's Net Worth $85B") 
       // for testin' purposes
       
       console.log(`Case: lIdx =='4'`)
   }
   else if (lIdx == '5') {

       netCounter = netCounter + 82;   
       assetsCounter = assetsCounter + 1;
       futureAssetsCounter = futureAssetsCounter - 1;
       
       yourNetWorth.innerText=(`$${netCounter}B`)
       yourAssets.innerText=(`${assetsCounter} Units`)
       futureNetWorth.innerText = (` $${netfutureCounter}B`)
       futureAssets.innerText = (`${futureAssetsCounter} Units`)
       finalResult.innerHTML = ("Sergey Brin's Net Worth $ 82B") 
       
       // for testin' purposes
       
       console.log(`Case: lIdx =='5'`)
   }
       else if (lIdx == '6') {

       netCounter = netCounter + 79;   
       assetsCounter = assetsCounter + 1;
       futureAssetsCounter = futureAssetsCounter - 1;
       
       yourNetWorth.innerText=(`$${netCounter}B`)
       yourAssets.innerText=(`${assetsCounter} Units`)
       futureNetWorth.innerText = (` $${netfutureCounter}B`)
       futureAssets.innerText = (`${futureAssetsCounter} Units`)
       finalResult.innerHTML = ("Steve Ballmer's Net Worth $ 79 B") 
       // for testin' purposes
       
       console.log(`Case: lIdx =='6'`)
   }
else if (lIdx == '7') {

       netCounter = netCounter + 50;   
       assetsCounter = assetsCounter + 1;
       futureAssetsCounter = futureAssetsCounter - 1;
       
       yourNetWorth.innerText=(`$${netCounter}B`)
       yourAssets.innerText=(`${assetsCounter} Units`)
       futureNetWorth.innerText = (` $${netfutureCounter}B`)
       futureAssets.innerText = (`${futureAssetsCounter} Units`)
       finalResult.innerHTML = ("Larry Ellison's Net Worth $ 50 B") 
       // for testin' purposes
       
       console.log(`Case: lIdx =='7'`)
}
}
else if (rIdx < lIdx){ 
   if (rIdx == '0') {
   
       netfutureCounter = netfutureCounter + 248;
       futureAssetsCounter = futureAssetsCounter + 1;
       assetsCounter = assetsCounter -1;

       futureNetWorth.innerText = (`$${netfutureCounter}B`)
       futureAssets.innerText = (`${futureAssetsCounter} Units`)
       yourNetWorth.innerText=(`$${netCounter}B`)
       yourAssets.innerText=(`${assetsCounter} Units`)
       finalResult.innerHTML = ("Elon Musk's Net Worth $ 248B")
       // for testin' purposes
       
       console.log(`Case: rIdx ==='0'`)
   }

   else if (rIdx ==='1')
{
       netfutureCounter = netfutureCounter + 136;
       futureAssetsCounter = futureAssetsCounter + 1;
       assetsCounter = assetsCounter -1;

       futureNetWorth.innerText = (`$${netfutureCounter}B`)
       futureAssets.innerText = (`${futureAssetsCounter} Units`)
       yourNetWorth.innerText=(`$${netCounter}B`)
       yourAssets.innerText=(`${assetsCounter} Units`)
       finalResult.innerHTML = ("Jeff Bezos's Net Worth $ 136B ") 
       // for testin' purposes
       
       console.log(`Case: rIdx ==='1'`)
       
}
else if (rIdx == '2') 
{
       netfutureCounter = netfutureCounter + 103;
       futureAssetsCounter = futureAssetsCounter + 1;
       assetsCounter = assetsCounter -1;

       futureNetWorth.innerText = (`$${netfutureCounter}B`)
       futureAssets.innerText = (`${futureAssetsCounter} Units`)
       yourNetWorth.innerText=(`$${netCounter}B`)
       yourAssets.innerText=(`${assetsCounter} Units`)
       finalResult.innerHTML = ("Bill Gates's Net Worth $103B")

       
       // for testin' purposes
       
       console.log(`Case: rIdx === '2'`)

}
else if (rIdx === '3') 
{
       netfutureCounter = netfutureCounter + 90
       futureAssetsCounter = futureAssetsCounter + 1
       assetsCounter = assetsCounter -1;

       futureNetWorth.innerText = (`$${netfutureCounter}B`)
       futureAssets.innerText = (`${futureAssetsCounter} Units`)
       yourNetWorth.innerText=(`$${netCounter}B`)
       yourAssets.innerText=(`${assetsCounter} Units`)
       finalResult.innerHTML = ("Mark Zuckerberg's Net Worth $90B") 
       // for testin' purposes
       
       console.log(`Case: rIdx === '3'`)
}
else if (rIdx == '4')
{
       netfutureCounter = netfutureCounter + 85
       futureAssetsCounter = futureAssetsCounter + 1
       assetsCounter = assetsCounter -1;

       futureNetWorth.innerText = (`$${netfutureCounter}B`)
       futureAssets.innerText = (`${futureAssetsCounter} Units`)
       yourNetWorth.innerText=(`$${netCounter}B`)
       yourAssets.innerText=(`${assetsCounter} Units`)
       finalResult.innerHTML = ("Larry Page's Net Worth $85B")
       // for testin' purposes
       
       console.log(`Case: rIdx === '4'`)


}
else if (rIdx == '5') 
{
       netfutureCounter = netfutureCounter + 82
       futureAssetsCounter = futureAssetsCounter + 1
       assetsCounter = assetsCounter -1;

       futureNetWorth.innerText = (`$${netfutureCounter}B`)
       futureAssets.innerText = (`${futureAssetsCounter} Units`)
       yourNetWorth.innerText=(`$${netCounter}B`)
       yourAssets.innerText=(`${assetsCounter} Units`)
       finalResult.innerHTML = ("Sergey Brin's Net Worth $ 82B")
       // for testin' purposes
       
       console.log(`Case: Idx === '5'`)
}
else if (rIdx == '6') 
{
       netfutureCounter = netfutureCounter + 79
       futureAssetsCounter = futureAssetsCounter + 1
       assetsCounter = assetsCounter -1;

       futureNetWorth.innerText = (`$${netfutureCounter}B`)
       futureAssets.innerText = (`${futureAssetsCounter} Units`)
       yourNetWorth.innerText=(`$${netCounter}B`)
       yourAssets.innerText=(`${assetsCounter} Units`)
       finalResult.innerHTML = ("Steve Ballmer's Net Worth $ 79B")
       // for testin' purposes
       
       console.log(`Case rIdx === '6'`)
}
else if (rIdx == '7')
{
       netfutureCounter = netfutureCounter + 50
       futureAssetsCounter = futureAssetsCounter + 1
       assetsCounter = assetsCounter -1;

       futureNetWorth.innerText = (`$${netfutureCounter}B`)
       futureAssets.innerText = (`${futureAssetsCounter} Units`)
       yourNetWorth.innerText=(`$${netCounter}B`)
       yourAssets.innerText=(`${assetsCounter} Units`)
       finalResult.innerHTML = ("Larry Ellison's Net Worth $ 50B")
       
       // for testing purposes
       console.log (`case: rIdx === '7'`)
}
}
else if (rIdx == lIdx){
assetsCounter = assetsCounter -1;
futureAssetsCounter = futureAssetsCounter - 1;
futureAssets.innerText = (`${futureAssetsCounter} Units`)
yourAssets.innerText=(`${assetsCounter} Units`)
finalResult.innerHTML= "Wealth Wars!"
console.log (`Wealth Wars`)
}

}
else{
   document.getElementById("continueBtn").disabled = true;

   gameResult(netCounter,netfutureCounter)
}



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
document.getElementById("Sergey-Brin-left").style.display='none'
document.getElementById("Steve-Ballmer-left").style.display='none'
document.getElementById("Larry-Ellison-left").style.display='none'
document.getElementById('Result').style.display='none'
}








































































































// // There will be several fuctions for the game
// // First we need a function that initialize the game.


//  const ElonLeft = document.getElementById("Elon-Musk-left")
//  const JeffLeft = document.getElementById("Jeff-Bezos-left")
//  const BillLeft = document.getElementById("Bill-gates-left")
//  const MarkLeft = document.getElementById("Mark-Zuck-left")
//  const LarryPLeft = document.getElementById("Larry-Page-left")
//  const SergeyLeft = document.getElementById("Sergey-Brin-left")
//  const SteveLeft = document.getElementById("Steve-Ballmer-left")
//  const LarryELeft = document.getElementById("Larry-Ellison-left")

// // Grabbing the imgs on the right section

//  const ElonRight = document.getElementById("Elon-Musk-right")
//  const JeffRight = document.getElementById("Jeff-Bezos-right")
//  const BillRight = document.getElementById("Bill-gates-right")
//  const MarkRight = document.getElementById("Mark-Zuck-right")
//  const LarryPRight = document.getElementById("Larry-Page-right")
//  const SergeyRight = document.getElementById("Sergey-Brin-right")
//  const SteveRight = document.getElementById("Steve-Ballmer-right")
//  const LarryERight = document.getElementById("Larry-Ellison-right")
 
 
 
//  let leftCard
//  let rightCard

// // Creating an Array of the whole list of imgs so I could choose it in the Random function that would shuffle the imgs randomly.
// let arrLeft = [ElonLeft,JeffLeft,BillLeft, MarkLeft, LarryPLeft, SergeyLeft,SteveLeft, LarryELeft ]

// // Creating an Array of the right section of imgs
// let arrRight = [ElonRight, JeffRight, BillRight, MarkRight, LarryPRight, SergeyRight, SteveRight,LarryERight]



// //  let startBtn=document.querySelector("#start")

// //  startBtn.addEventListener("click", startsFun)


 
// //  function startsFun (event) {
// //     console.log("Starting")
// //     // flipCards()
// //     alert("Hey! You won't ever lose! You are playing against your future you either get your Net Worth now in this game you are going to meet the top eight of wealthiest figures in the world! ")
// //  }

// let leftSectionArray = document.querySelectorAll(".left-imgs")
// let rightSectionArray = document.querySelectorAll(".right-imgs")
// // let rightSectionArray = document.getElementById("right-Section")

// function flipCards() {
//     leftSectionArray.forEach(img => {
//         console.log(img)
//         img.style.display = 'none'
//     })    
//     rightSectionArray.forEach(img => {
//         img.style.display = 'none'
//     })    

//     rightIdx=Math.floor(Math.random()*8)
//     leftIdx=Math.floor(Math.random() *8)
//     rightCard = arrRight[rightIdx]
//     leftCard = arrLeft[leftIdx]
//     // flip random card from left and right
//     rightCard.style.display = 'block'
//     leftCard.style.display = 'block'
//     console.log (rightCard)
//     console.log(leftCard)
//     console.log(rightIdx)
//     console.log(leftIdx)
    
//     gameLogic(leftIdx,rightIdx)

// }

// // Adding an Event Listener to the "Rest Button" and creating a function that rest the game.

// let continueButton = document.getElementById("continueBtn")
// continueButton.addEventListener("click", continueFcn)



// function continueFcn (event) {
//     flipCards()
//     // console.log("continueing the game")
//     // rightIdx=Math.floor(Math.random()*8)
//     // leftIdx=Math.floor(Math.random() * 8)
//     // rightCard = arrRight[leftIdx]
//     // leftCard = arrLeft[rightIdx]
//     // gameLogic(leftIdx,rightIdx)
// }
// // lIdx  Parameter that returns the random array index thats excuted by Math.random() of the arrLeft.
// // rIdx : Parameter that returns the random array index of the arrRight.


//  let yourNetWorth = document.getElementById ("net-worth")
//  let yourAssets = document.getElementById("assets")
//  let futureNetWorth = document.getElementById("net-worth-future")
//  let futureAssets = document.getElementById("future-assets")
//  let finalResult = document.getElementById("Result")

// // Parameters that stores and counts the scores of the game
 
//  let netCounter = 0
//  let netfutureCounter = 0
//  let assetsCounter = 10
//  let futureAssetsCounter = 10


//  function gameLogic (lIdx,rIdx) {
 
    

//     if (lIdx < rIdx) {
//         if (lIdx =='0') {
        
//         netCounter = netCounter + 248;   
//         assetsCounter = assetsCounter + 1;
//         futureAssetsCounter = futureAssetsCounter - 1;
        
//         yourNetWorth.innerText=(`$${netCounter}B`)
//         yourAssets.innerText=(`${assetsCounter} Units`)
//         futureNetWorth.innerText = (` $${netfutureCounter}B`)
//         futureAssets.innerText = (`${futureAssetsCounter} Units`)
//         finalResult.innerHTML = ("Elon Musk's Net Worth $ 248B") 
//         // for testin' purposes
        
//         console.log(`Case: lIdx =='0'`)
//     }
//     else if (lIdx == '1') 
//     {

//         netCounter = netCounter + 136;   
//         assetsCounter = assetsCounter + 1;
//         futureAssetsCounter = futureAssetsCounter - 1;
        
//         yourNetWorth.innerText=(`$${netCounter}B`)
//         yourAssets.innerText=(`${assetsCounter} Units`)
//         futureNetWorth.innerText = (` $${netfutureCounter}B`)
//         futureAssets.innerText = (`${futureAssetsCounter} Units`)
//         finalResult.innerHTML = ("Jeff Bezos's Net Worth $ 136B ") 
//         // for testin' purposes
        
//         console.log(`Case: lIdx =='1'`)
//     }

//     else if (lIdx == '2') {
        
//         netCounter = netCounter + 103;   
//         assetsCounter = assetsCounter + 1;
//         futureAssetsCounter = futureAssetsCounter - 1;
        
//         yourNetWorth.innerText=(`$${netCounter}B`)
//         yourAssets.innerText=(`${assetsCounter} Units`)
//         futureNetWorth.innerText = (` $${netfutureCounter}B`)
//         futureAssets.innerText = (`${futureAssetsCounter} Units`)
//         finalResult.innerHTML = ("Bill Gates's Net Worth $103B") 
//         // for testin' purposes
        
//         console.log(`Case: lIdx =='2'`)
//     }
//     else if (lIdx == '3') {
        
//         netCounter = netCounter + 90;   
//         assetsCounter = assetsCounter + 1;
//         futureAssetsCounter = futureAssetsCounter - 1;
        
//         yourNetWorth.innerText=(`$${netCounter}B`)
//         yourAssets.innerText=(`${assetsCounter} Units`)
//         futureNetWorth.innerText = (` $${netfutureCounter}B`)
//         futureAssets.innerText = (`${futureAssetsCounter} Units`)
//         finalResult.innerHTML = ("Mark Zuckerberg's Net Worth $ 90 B") 
//         // for testin' purposes
        
//         console.log(`Case: lIdx =='3'`)
//     }
//     else if (lIdx == '4')
//     { 

//         netCounter = netCounter + 85;   
//         assetsCounter = assetsCounter + 1;
//         futureAssetsCounter = futureAssetsCounter - 1;
        
//         yourNetWorth.innerText=(`$${netCounter}B`)
//         yourAssets.innerText=(`${assetsCounter} Units`)
//         futureNetWorth.innerText = (` $${netfutureCounter}B`)
//         futureAssets.innerText = (`${futureAssetsCounter} Units`)
//         finalResult.innerHTML = ("Larry Page's Net Worth $85B") 
//         // for testin' purposes
        
//         console.log(`Case: lIdx =='4'`)
//     }
//     else if (lIdx == '5') {

//         netCounter = netCounter + 82;   
//         assetsCounter = assetsCounter + 1;
//         futureAssetsCounter = futureAssetsCounter - 1;
        
//         yourNetWorth.innerText=(`$${netCounter}B`)
//         yourAssets.innerText=(`${assetsCounter} Units`)
//         futureNetWorth.innerText = (` $${netfutureCounter}B`)
//         futureAssets.innerText = (`${futureAssetsCounter} Units`)
//         finalResult.innerHTML = ("Sergey Brin's Net Worth $ 82B") 
        
//         // for testin' purposes
        
//         console.log(`Case: lIdx =='5'`)
//     }
//         else if (lIdx == '6') {

//         netCounter = netCounter + 79;   
//         assetsCounter = assetsCounter + 1;
//         futureAssetsCounter = futureAssetsCounter - 1;
        
//         yourNetWorth.innerText=(`$${netCounter}B`)
//         yourAssets.innerText=(`${assetsCounter} Units`)
//         futureNetWorth.innerText = (` $${netfutureCounter}B`)
//         futureAssets.innerText = (`${futureAssetsCounter} Units`)
//         finalResult.innerHTML = ("Steve Ballmer's Net Worth $ 79 B") 
//         // for testin' purposes
        
//         console.log(`Case: lIdx =='6'`)
//     }
// else if (lIdx == '7') {

//         netCounter = netCounter + 50;   
//         assetsCounter = assetsCounter + 1;
//         futureAssetsCounter = futureAssetsCounter - 1;
        
//         yourNetWorth.innerText=(`$${netCounter}B`)
//         yourAssets.innerText=(`${assetsCounter} Units`)
//         futureNetWorth.innerText = (` $${netfutureCounter}B`)
//         futureAssets.innerText = (`${futureAssetsCounter} Units`)
//         finalResult.innerHTML = ("Larry Ellison's Net Worth $ 50 B") 
//         // for testin' purposes
        
//         console.log(`Case: lIdx =='7'`)
// }
// }
// else if (rIdx < lIdx){ 
//     if (rIdx == '0') {
    
//         netfutureCounter = netfutureCounter + 248;
//         futureAssetsCounter = futureAssetsCounter + 1;
//         assetsCounter = assetsCounter -1;

//         futureNetWorth.innerText = (`$${netfutureCounter}B`)
//         futureAssets.innerText = (`${futureAssetsCounter} Units`)
//         yourNetWorth.innerText=(`$${netCounter}B`)
//         yourAssets.innerText=(`${assetsCounter} Units`)
//         finalResult.innerHTML = ("Elon Musk's Net Worth $ 248B")
//         // for testin' purposes
        
//         console.log(`Case: rIdx ==='0'`)
//     }

//     else if (rIdx ==='1')
// {
//         netfutureCounter = netfutureCounter + 136;
//         futureAssetsCounter = futureAssetsCounter + 1;
//         assetsCounter = assetsCounter -1;

//         futureNetWorth.innerText = (`$${netfutureCounter}B`)
//         futureAssets.innerText = (`${futureAssetsCounter} Units`)
//         yourNetWorth.innerText=(`$${netCounter}B`)
//         yourAssets.innerText=(`${assetsCounter} Units`)
//         finalResult.innerHTML = ("Jeff Bezos's Net Worth $ 136B ") 
//         // for testin' purposes
        
//         console.log(`Case: rIdx ==='1'`)
        
// }
// else if (rIdx == '2') 
// {
//         netfutureCounter = netfutureCounter + 103;
//         futureAssetsCounter = futureAssetsCounter + 1;
//         assetsCounter = assetsCounter -1;

//         futureNetWorth.innerText = (`$${netfutureCounter}B`)
//         futureAssets.innerText = (`${futureAssetsCounter} Units`)
//         yourNetWorth.innerText=(`$${netCounter}B`)
//         yourAssets.innerText=(`${assetsCounter} Units`)
//         finalResult.innerHTML = ("Bill Gates's Net Worth $103B")

        
//         // for testin' purposes
        
//         console.log(`Case: rIdx === '2'`)

// }
// else if (rIdx === '3') 
// {
//         netfutureCounter = netfutureCounter + 90
//         futureAssetsCounter = futureAssetsCounter + 1
//         assetsCounter = assetsCounter -1;

//         futureNetWorth.innerText = (`$${netfutureCounter}B`)
//         futureAssets.innerText = (`${futureAssetsCounter} Units`)
//         yourNetWorth.innerText=(`$${netCounter}B`)
//         yourAssets.innerText=(`${assetsCounter} Units`)
//         finalResult.innerHTML = ("Mark Zuckerberg's Net Worth $90B") 
//         // for testin' purposes
        
//         console.log(`Case: rIdx === '3'`)
// }
// else if (rIdx == '4')
// {
//         netfutureCounter = netfutureCounter + 85
//         futureAssetsCounter = futureAssetsCounter + 1
//         assetsCounter = assetsCounter -1;

//         futureNetWorth.innerText = (`$${netfutureCounter}B`)
//         futureAssets.innerText = (`${futureAssetsCounter} Units`)
//         yourNetWorth.innerText=(`$${netCounter}B`)
//         yourAssets.innerText=(`${assetsCounter} Units`)
//         finalResult.innerHTML = ("Larry Page's Net Worth $85B")
//         // for testin' purposes
        
//         console.log(`Case: rIdx === '4'`)


// }
// else if (rIdx == '5') 
// {
//         netfutureCounter = netfutureCounter + 82
//         futureAssetsCounter = futureAssetsCounter + 1
//         assetsCounter = assetsCounter -1;

//         futureNetWorth.innerText = (`$${netfutureCounter}B`)
//         futureAssets.innerText = (`${futureAssetsCounter} Units`)
//         yourNetWorth.innerText=(`$${netCounter}B`)
//         yourAssets.innerText=(`${assetsCounter} Units`)
//         finalResult.innerHTML = ("Sergey Brin's Net Worth $ 82B")
//         // for testin' purposes
        
//         console.log(`Case: Idx === '5'`)
// }
// else if (rIdx == '6') 
// {
//         netfutureCounter = netfutureCounter + 79
//         futureAssetsCounter = futureAssetsCounter + 1
//         assetsCounter = assetsCounter -1;

//         futureNetWorth.innerText = (`$${netfutureCounter}B`)
//         futureAssets.innerText = (`${futureAssetsCounter} Units`)
//         yourNetWorth.innerText=(`$${netCounter}B`)
//         yourAssets.innerText=(`${assetsCounter} Units`)
//         finalResult.innerHTML = ("Steve Ballmer's Net Worth $ 79B")
//         // for testin' purposes
        
//         console.log(`Case rIdx === '6'`)
// }
//  else if (rIdx == '7')
//  {
//         netfutureCounter = netfutureCounter + 50
//         futureAssetsCounter = futureAssetsCounter + 1
//         assetsCounter = assetsCounter -1;

//         futureNetWorth.innerText = (`$${netfutureCounter}B`)
//         futureAssets.innerText = (`${futureAssetsCounter} Units`)
//         yourNetWorth.innerText=(`$${netCounter}B`)
//         yourAssets.innerText=(`${assetsCounter} Units`)
//         finalResult.innerHTML = ("Larry Ellison's Net Worth $ 50B")
        
//         // for testing purposes
//         console.log (`case: rIdx === '7'`)
//  }
//  }
//  else if (rIdx == lIdx){
//  assetsCounter = assetsCounter -1;
//  futureAssetsCounter = futureAssetsCounter - 1;
//  futureAssets.innerText = (`${futureAssetsCounter} Units`)
//  yourAssets.innerText=(`${assetsCounter} Units`)
//  finalResult.innerHTML= "Wealth Wars!"
//  console.log (`Wealth Wars`)
//  }
 
//  gameResult(yourNetWorth,futureNetWorth)
 
// }
  
// // Function that Compares between the Net-Worth, the Future Net-Worth, Assets and future Assets. 
 
// function gameResult (netResult,  futureNetResult) {
//     if (netResult > futureNetResult) {
//     finalResult.innerHTML="Congragulation! Your Net Worth is $" + netResult + "B"
//     }
//     else if (netResult < futureNetResult)
//     {
//         finalResult.innerHTML = "Ops! don't worry you have a bright future ahead."
//     }
// }


// // Adding an event listener to the rest button 
// let restBtn = document.getElementById("RestBtn")
// restBtn.addEventListener("click", restGame)

// function restGame () {

// // resting the right side imgs
//  document.getElementById("Elon-Musk-right").style.display='none'
//  document.getElementById("Jeff-Bezos-right").style.display='none'
//  document.getElementById("Bill-gates-right").style.display='none'
//  document.getElementById("Mark-Zuck-right").style.display='none'
//  document.getElementById("Larry-Page-right").style.display='none'
//  document.getElementById("Sergey-Brin-right").style.display='none'
//  document.getElementById("Steve-Ballmer-right").style.display='none'
//  document.getElementById("Larry-Ellison-right").style.display='none'
// // resting the left side imgs
// document.getElementById("Elon-Musk-left").style.display='none'
// document.getElementById("Jeff-Bezos-left").style.display='none'
// document.getElementById("Bill-gates-left").style.display='none'
// document.getElementById("Mark-Zuck-left").style.display='none'
// document.getElementById("Larry-Page-left").style.display='none'
// document.getElementById("Sergey-Brin-left").style.display='none'
// document.getElementById("Steve-Ballmer-left").style.display='none'
// document.getElementById("Larry-Ellison-left").style.display='none'
// document.getElementById('Result').style.display='none'
// }