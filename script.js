//start game on click
function startGame() {

    alert('You have awakened from a fifty year long cryosleep.');
    
    let firstAction = prompt('You see a button on the cryochamber hatch. What will you do?');
    
        if (firstAction === 'press the button') {
            alert ('The hatch is now opening');
        }
        else if (firstAction === 'go back to sleep') {
              alert ('You are now entering a cryosleep. You will be safe here from the xenomorph until a rescue team arrives.');
        }
        else {
            alert ('Wrong command input');
        }
    
    }