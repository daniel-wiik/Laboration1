//start game on click
function startGame() {

alert('You have awakened from a fifty year long cryosleep.');

while (true) {
let firstScene = prompt('You see a button on the cryochamber hatch. What will you do?');
    
        if (firstScene === 'press the button','Press the button') {
            alert ('The hatch is now opening. You are in an unfamiliar spaceship');
            break;
        }
        else if (firstScene === 'go back to sleep', 'Go back to sleep') {
              alert ('You are now entering a cryosleep. You will sleep safely until a rescue team arrives.')
              alert ('Game is now starting over') 
        }
        else {
            alert ("Wrong input command. Try 'press the button', 'go back to sleep'" );
        }
    }
let secondScene = prompt('You see a door that is locked, and there is a keycard next to it. What will you do?');
        
        if (secondScene === 'pick up keycard', 'Pick up keycard') {
            alert ('You have picked up the keycard. You can now open the door.')
        }
        else {
            alert ("Wrong command input. Try 'pick up keycard'")
        }
}


