/**
 * This is the main function of the game 
 * and is triggered through an onclick event on abutton in html
 */
function startGame() {
    
    // Eter first scene
    firstScene = alert('You have awakened from a fifty year long cryosleep.'); 

    // This loop handles the first scene of the game
    while (true) {
        firstScene = prompt('You see a button on the cryochamber hatch. What will you do?');

        //avbryt cancels the game
        if (firstScene === null) {
            alert('You have quit the game.');
            return false;
        }
        // this makes all lowercase letters to handle different input
        let firstResponse = firstScene.toLowerCase();

        if (firstResponse === 'press the button') {
            alert('The hatch is now opening. You are in an unfamiliar spaceship');
            break; //break loop if value is 'press the button'
        }
        else if (firstResponse === 'go back to sleep') {
            alert('You are now entering a cryosleep. You will sleep safely until a rescue team arrives.');
            alert("You have unlocked ending 'A'");
            return false; //ends the game
        }
        else {
            alert("Wrong command input. Try 'press the button' or 'go back to sleep'");
        }
    }
    /*Enter second scene and handle all input*/
    while (true) {
        secondScene = prompt('You see a door that is locked, and there is a keycard next to it. What will you do?');

        if (secondScene === null) {
            alert('You have quit the game.');
            return false;
        }
        let secondResponse = secondScene.toLowerCase();

        if (secondResponse === 'pick up keycard') {
            alert('You have picked up the keycard. You can now open the door.');
            break;
        }
        else {
            alert("Wrong command input. Try 'pick up keycard'");
        }
    }
    /* Handle the last part of the second scene of the game and take care of all input */
    while (true) {
        secondResponse = confirm('Press OK to unlock the door');

        if (secondResponse === true) {
            alert('The door is now unlocked.');
            break;
        }
        else {
            alert('*crickets chirping*');
        }
    }
    /*Enter second scene and handle all input*/
    while (true) {
        thirdScene = alert('You are in a dark narrow hallway. You can hear heavy steps from above');

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
    /*Enter fourth scene and handle all input*/
    while (true) {
        fourthScene = prompt('You have found the communications room. You should try to send out a distress signal.');

        if (fourthScene === null) {
            alert('You have the quit the game.');
            return false;
        }
        let fourthResponse = fourthScene.toLowerCase();

        if (fourthResponse === 'send') {
            alert('You sent out a distress signal, but no one is responding.');
            break;
        }
        else {
            alert("Wrong input command. Try 'send'");
        }
    }
    /*Enter fifth scene and handle all input*/
    while (true) {
        fifthScene = prompt('In the communications room, you see a flamethrower and a dead body next to it. What will you do?');

        if (fifthScene === null) {
            alert('You have quit the game');
            return false;
        }
        let fifthResponse = fifthScene.toLowerCase();

        if (fifthResponse === 'pick up flamethrower') {
            alert('You have picked up the flamethrower, and there is fuel in it. You can use this against the alien');
            break;
        }
        else if (fifthResponse === 'examine body') {
            alert('You examined the body. Looks like he got killed by the alien.');
        }
        else {
            alert("Wrong input command. Try 'pick up flamethrower' or 'examine body'");
        }
    }
    /*Enter sixth scene and handle all input*/
    sixthScene = alert('You can hear the steps again coming from above. It is getting louder and louder.');

    while (true) {
        sixthScene = prompt ('The alien drops from a vent right in front of you, it is ready to attack you. What will you do?'); {
        
        if (sixthScene === null) {
            alert('You have quit the game');
            return false;
        }
        let sixthResponse = sixthScene.toLowerCase();

        if (sixthResponse === 'use flamethrower') {
            alert('You used the flamethrower against the alien. It was super effective, but it did not kill it.');
            alert('The alien runs away, pouring blood after him, which looks more like green acid.');
            alert ('Out of nowhere a rescue team enters the communications room.');
            alert ('You are starting to feel a bit sick.');
            alert ('The rescue team starts aiming their pulse rifles at you');
            alert ('A little alien being bursts out of your chest.');
            break;
        }
        else if (sixthResponse === 'do nothing') {
            alert('The alien killed you!');
            alert('Loading checkpoint.');
        }
        else {
            alert("Wrong input command. Try 'use flamethrower' or 'do nothing'.");
            endGame = false;
        }
    }
}
}

