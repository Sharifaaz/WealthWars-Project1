# Wealth Wars Cards Game

## The Game can be Accessed Through this Link :
### [GitHub Pages Link](https://sharifaaz.github.io/WealthWars-Project1/)



# Application's Description 

The project is a game for one player vs. AI 
The game is " Wars (Cards Game)
The Idea of the game is that the cards illustrates the top wealthiest figures in Tech where the top wealthiest character's card gets the highest score and the less wealthy figure its card get discarded to the wealthier character, the game consists of ten rounds, each round two random characters displayed and compared in term of the wealthier figure, however the user only can win in this game because its designed that the score ("Net worth") is either gained currently or in the future since the AI represents the player's 'Future Net Worth'. 

# Applications Wireframe


![WW-Project](https://user-images.githubusercontent.com/113825391/200132349-dbcd953c-30ce-4f18-a041-27150b13dae5.png)

# Game's Aim

Giving the cards game a meaning since I am interested in those characters and wanted to inspire the Player to read about their successful stories..

# Technical Description

## There are Four main variables of the game:

### Future Assets : 
Represents the AI's Cards.
### Future Net Worth :
 Represents the AI's score.
### Net Worth : 
Represnts the Player's score
### Assets : 
Represnts the Player's cards.

## There are Three main buttons in the App 

### 1- PLAY BUTTON : 

Its controled to be clickable 10 times only to limit the game's rounds, also it returns the game's result.


### 2- RESTART BUTTON :

It rest the DOM Elements values and return the user to the game's instruction page to restart the game.


### 3- INSTRUCTIONS BUTTON :

It displays to the user, the game's instruction, the scoring criteria and the winning condition.


## Sub-buttons 
There are sub-buttons to allow the user to return to any page of the app without refreshing the page for a convenient user experience.


## Functions used in the game 

### playFcn : 

A function that applied on the "Play Button" that calls an another function that flip the cards randomly.

### flipCards: 

It picks random imgs from an array for each side left and right.

### gameLogic : 

It takes the number of indecies of the imgs displayed on both sides and it counts the "Net-worth and Assets scores" and it returns the values of theses counters.


### finalResult : 

It compares the final scores of the game and decides which wins the game.

### restGame : 

Its an event listener function for the "Restart Game" button that rest all counters and it return the user to the Instruction Page.

# Technologies Used:

Javascripts, HTML, CSS and Figma.

# Refrences

### Game Theme Inspired by the Top wealtiest figures in Techenology
However, here's a link [Ceoworld Magazine](https://ceoworld.biz/2020/11/28/10-richest-and-most-successful-tech-tycoons/)
 thats show the statistics of the figure's net worths.



