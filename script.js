console.log('Hi, Welcome to the game Rock, Scissors, Paper!');

const getUserChoice = (userInput) => {

    userInput = userInput.toLowerCase();

    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    } else {
        console.log("Something seems to have gone wrong. You have to choose rock, scissors or paper")
    }

}

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }

}

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'It´s a tie!';
    } else if (
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'Congratulations, you won!';
    } else if (userChoice === 'bomb') {
        return 'The user blew up the computer and won!'
    } else {
        return 'Computer won!';
    }
};


const playGame = () => {
    const userChoice = getUserChoice('paper');
    const computerChoice = getComputerChoice();
    console.log(`User chose: ${userChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
}

(playGame());