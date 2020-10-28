//start game on click
function startGame() {

    alert('You have awakened from a fifty year long cryosleep.');

    while (true) {
        let firstScene = prompt('You see a button on the cryochamber hatch. What will you do?');

        if (firstScene === 'press the button') {
            alert('The hatch is now opening. You are in an unfamiliar spaceship');
            break; //make this action loop if wrong input
        }
        else if (firstScene === 'go back to sleep') {
            alert('You are now entering a cryosleep. You will sleep safely until a rescue team arrives.')
            alert('Reloading checkpoint')
        }
        else {
            alert("Wrong command input. Try 'press the button' or 'go back to sleep'");
        }
    }

    while (true) {
        let secondScene = prompt('You see a door that is locked, and there is a keycard next to it. What will you do?');

        if (secondScene === 'pick up keycard') {
            alert('You have picked up the keycard. You can now open the door.');
            break;
        }
        else {
            alert("Wrong command input. Try 'pick up keycard'")
        }

    }
    while (true) {
        let secondScene = confirm('Press OK to unlock the door')

        if (secondScene == true) {
            alert('The door is now unlocked.')
            break;
        }
        else {
            alert('*crickets chirping*')
        }
    }
}


