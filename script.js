//start game on click
function startGame() {

    let firstScene = alert('You have awakened from a fifty year long cryosleep.');

    while (true) {
        firstScene = prompt('You see a button on the cryochamber hatch. What will you do?');

        if (firstScene === null) {
            alert('You have quit the game.');
            return false;
        }

        let firstResponse = firstScene.toLowerCase();

        if (firstResponse === 'press the button') {
            alert('The hatch is now opening. You are in an unfamiliar spaceship');
            break; //make this action loop if wrong input
        }
        else if (firstResponse === 'go back to sleep') {
            alert('You are now entering a cryosleep. You will sleep safely until a rescue team arrives.');
            alert("You have unlocked ending 'A'");
            return false
        }
        else {
            alert("Wrong command input. Try 'press the button' or 'go back to sleep'");
        }
    }



    while (true) {
        secondScene = prompt('You see a door that is locked, and there is a keycard next to it. What will you do?');

        if (secondScene === null) {
            alert('You have quit the game.');
            return false;
        }
        let secondResult = secondScene.toLowerCase();

        if (secondResult === 'pick up keycard') {
            alert('You have picked up the keycard. You can now open the door.');
            break;
        }
        else {
            alert("Wrong command input. Try 'pick up keycard'");
        }

    }
    while (true) {
        secondScene = confirm('Press OK to unlock the door');

        if (secondScene == true) {
            alert('The door is now unlocked.');
            break;
        }
        else {
            alert('*crickets chirping*');
        }
    }

    let thirdScene = alert('You are in a dark narrow hallway. You can hear heavy steps from above');

    while (true) {
        thirdScene = prompt('The steps are getting louder. You can either hide inside a locker or keep walking.');

        if (thirdScene === null) {
            alert('You have the quit the game.');
            return false;
        }

        let thirdResponse = thirdScene.toLowerCase();

        if (thirdResponse === 'hide') {
            alert('You hid inside the locker. You see an alien being walking right past you. It looks dangerous.');
            alert('The coast is clear now. You leave the locker and keep exploring the spaceship.');
            break;
        }
        else if (thirdResponse === 'keep walking') {
            alert('The alien being drops out of a vent from above after hearing your footsteps, and it is approaching you.');
            alert('You have nothing to defend yourself with, so the alien killed you.');
            alert('Loading checkpoint.');
        }
        else {
            alert("Wrong input command. Try 'keep walking' or 'hide'.");
        }
    }
}

