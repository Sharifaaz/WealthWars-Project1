# WealthWars-Project1

live link: https://sharifaaz.github.io/WealthWars-Project1/

# Game-Description 

The project is a game for one player vs. AI 
The game is " Wars (Cards Game)
The Idea of the game is that the cards illustrates the top wealthiest figures in Tech where the top wealthiest character's card gets the highest score and the less wealthy figure its card get discarded to the wealthier character, the game consists of ten rounds, each round two random characters displayed and compared in term of the wealthier figure, however the user only can win in this game because its designed that the score ("Net worth") is either gained currently or in the future since the AI represents the player's 'Future Net Worth'. 

# Game's Aim

Giving the cards game a meaning since I am interested in those characters and wanted to inspire the Player to read about their successful stories..



# Technical Description

#There are Four main variables of the game

1- Future Assets: Represents the AI's Cards
2-Future Net Worth: Represents the AI's score 
3-Net Worth: Represnts the Player's score
4-Assets : Represnts the Player's cards

-When the page reloads the instruction page pops up first and there's a start link to the game that takes me to the game page.

-There are two main butoons 

1- PLAY BUTTON: its controled to be clickable 10 times only to limit the game's rounds, also it returns the game's result.

2- RESTART BUTTON: It rest the DOM Elements values and return the user to the game's instruction page to restart the game.

##Functions used in the game:

#playFcn : A function that applied on the "Play Button" that calls an another function that flip the cards randomly.

#flipCards : it picks random imgs from an array for each side left and right.

#gameLogic : it takes the number of indecies of the imgs displayed on both sides and it counts the "Net-worth and Assets scores" and it returns the values of theses counters.

#finalResult : it compares the final scores of the game and decides which wins the game.

#restGame : its an event listener function for the "Restart Game" button that rest all counters and it return the user to the Instruction Page.

# Technologies Used:

Javascripts, HTML and CSS.

# Resources

Game Theme Inspired by the Top wealtiest figuress in Tech
However, here's a link thats show the statistics of the figure's net worths.
https://ceoworld.biz/2020/11/28/10-richest-and-most-successful-tech-tycoons/



