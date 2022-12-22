const userName = 'Mario'
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!')

const userQuestion = 'Irá chover amanhã?'

const perguntaCompleta = userName ? `${userName} está perguntando: ${userQuestion}` : `Usuário anônimo está perguntando: ${userQuestion}`
console.log(perguntaCompleta)

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = ''

// ELSE IF
if (randomNumber === 0) {
    eightBall = 'É uma certeza.';
} else if (randomNumber === 1) {
    eightBall = 'É decididamente assim.'
} else if (randomNumber === 2) {
    eightBall = 'Resposta nebulosa, tente de novo.'
} else if (randomNumber === 3) {
    eightBall = 'Não consigo prever agora.'
} else if (randomNumber === 4) {
    eightBall = 'Não conte com isso.'
} else if (randomNumber === 5) {
    eightBall = 'Minhas fontes dizem que não.'
} else if (randomNumber === 6) {
    eightBall = 'Perspectiva não tão boa.'
} else if (randomNumber === 7) {
    eightBall = 'Os sinais apontam que sim.'
} else {
    eightBall = 'Erro. Tente novamente'
}
console.log(eightBall)

// SWITCH 1

// switch (randomNumber) {
//     case 0:
//         eightBall = 'É uma certeza.'
//         break;
//         case 1:
//             eightBall= 'É decididamente assim.'
//             break;
//             case 2:
//                 eightBall = 'Resposta nebulosa, tente de novo.'
//                 break;
//                 case 3:
//                     eightBall = 'Não consigo prever agora.'
//                     break;
//                     case 4:
//                         eightBall = 'Não conte com isso.'
//                         break;
//                         case 5:
//                             eightBall = 'Minhas fontes dizem que não.'
//                             break ;
//                             case 6:
//                                 eightBall = 'Perspectiva não tão boa.'
//                                 break;
//                                 case 7:
//                                     eightBall = 'Os sinais apontam que sim.'
//                                     break;
//                                     default:
//                                         eightBall = 'Erro. Tente novamente'
// }
// console.log(eightBall)


// SWITCH 2 MUDANDO EIGHTBALL

// switch (eightBall) {
//     case 0:
//         console.log('É uma certeza.')
//         break;
//         case 1:
//             console.log('É decididamente assim.')
//             break;
//             case 2:
//                 console.log('Resposta nebulosa, tente de novo.')
//                 break;
//                 case 3:
//                     console.log('Não consigo prever agora.')
//                     break;
//                     case 4:
//                         console.log('Não conte com isso.')
//                         break;
//                         case 5:
//                             console.log('Minhas fontes dizem que não.')
//                             break ;
//                             case 6:
//                                 console.log('Perspectiva não tão boa.')
//                                 break;
//                                 case 7:
//                                     console.log('Os sinais apontam que sim.')
//                                     break;
//                                     default:
//                                         console.log('Erro. Tente novamente.')
// }