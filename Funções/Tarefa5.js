const getUserChoice = userInput => {
 userInput = userInput.toLowerCase()
    if (userInput === 'pedra'
        || userInput === 'papel'
        || userInput === 'tesoura'
        || userInput === 'bomba') {
        return userInput
    } else return console.log('erro')
}

function getComputerChoice() {
    const numberChoice = Math.floor(Math.random() * 3)
    let option;
    switch (numberChoice) {
        case 0:
            option = 'pedra';
            break;
        case 1:
            option = 'papel';
            break;
        case 2:
            option = 'tesoura';
            break;
            case 3:
                option = 'bomba'
                break;
        default:
            option = 'erro';
    }
    return option;
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'Empatou'
    }
     if (userChoice === 'pedra') {
        if (computerChoice === 'papel') {
            return 'O computador venceu.'
        } else return 'O usuário venceu.'
    } 
    if (userChoice === 'papel') {
        if (computerChoice === 'pedra') {
            return 'O usuário venceu.'
        } else return 'O computador venceu.'
    }
    if (userChoice === 'tesoura') {
        if (computerChoice === 'pedra') {
            return 'O computador venceu'
        } else return 'O usuário venceu'
    } if (userChoice === 'bomba') {
        return 'O usuário venceu.'
    }
}


const playGame = () => {
    let userChoice = getUserChoice('bomba')
    let computerChoice = getComputerChoice()
    let result = determineWinner(userChoice, computerChoice)
    console.log(`Escolha do usuário foi: ${userChoice}`)
    console.log(`Escolha do usuário foi: ${computerChoice}`)
    console.log(`O resultado foi: ${result}`)
}

playGame()
