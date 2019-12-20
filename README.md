# React_Memory_Game

### About

Application is a memory testing game, where user must click each unique picture once, with no repeat clicks. Pictures shuffle randomly upon each click. 

This game is built using the React JS library, with 3 primary components - the title bar, the wrapper containing the image cards, and the image cards. The fruit picture cards are generated dynamically using a JSON file mapped to the react component for the image cards, and the way that these cards are rendered to the screen is modified as the game progresses. 

### Walkthrough

App is 'fruit salad' themed, and so user is shown 12 images of various fruits upon game load. 

To play the game, click on any image to start. The cards will shuffle randomly, and then the user must click a new image that they have not clicked before. 

This gif shows the game in action: 
<br>
<img src="/public/react_readme_1.gif" width="600" height="250"/>

The top score is tracked globally and is displayed in the game header. It increments for each successful new click the user has. If the user clicks a card twice, then a prompt appears warning them and the game resets.  

Once all cards are clicked, game resets and images are returned to random order. 

### Technology Used

* JavaScript
  * React.js
### Future Development

* Update header/title to be centered + less ugly
* Spacing around cards (specifically around window borders)
* Add footer w/ copyright + name + github
