# Cards Against Humanity, a SQL project

Play cards against humanity, because it is fun. But you is funnier ? You ? or the computer ?

## Basic rules 
10 cards, a random fill in card (black) has to be continued by the most hilarious card at your disposal. 
A NPC, gets to fill in with its own card too. Choose you was funnier, it could be a random computer. 

## MVP 
### as a user,
- I can access a one player app plateform
- I get a random set of 10 cards against humanity type cards
- I see a initial card against humanity type card to complete with my own deck
- I am faced with an NPC who fill in the initial card too
- I can select which player (NPC, or I) was the funnier to my mind
- I can refine the overall cards deck selection on category style

### as a developer,
- I have a string type database of starting statement cards (black type cards against humanity cards)
- I have a string type database of filling the blanks cards (white type cards against humanity cards)
- I am using SQL as my database management language for relational databases
- I am giving the player and the NPC an array of 10 cards from the white cards database
- I am filtering the cards by thematics and only select the relevant categories if the user has refined the deck 
- my NPC is selecting a random fill in white card from its deck

## STETCH
### as a user,
- I can add string type content to the white cards database 
- I can add string type content to the black cards database (?? should we ??)

### as a developer,
- my databases work with a ADD function

## ML STRETCH
### as a user,
- I can login
- I can customise the name of the NPC who is learning from my winning choices
- I can play against the NPC learning from everybodys winning choices

### as a developer,
- my plateform has a login access for a better user experience
- my NPC is selecting a fill in white card from its deck, learning from the user humour selection
