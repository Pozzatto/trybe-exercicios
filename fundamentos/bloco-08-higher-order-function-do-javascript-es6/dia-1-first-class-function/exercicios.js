// exercicio Nova pessoa contratada

// const funcionario = (nomeCompleto) => {
//     const email = nomeCompleto.toLowerCase().split(' ').join('_');
//     return { nomeCompleto, email: `${email}@trybe.com` };
// }

// const newEmployees = (funcionario) => {
//     const employees = {
//       id1: funcionario('Douglas Miranda'),
//       id2: funcionario('Luiza Drumond'),
//       id3: funcionario('Carla Paiva'),
//     }
//     return employees;
//   };

// console.log(newEmployees(funcionario))

// ---------------------------------------
// exercicio Sorteador de lorteria

// const numAleatorio = (numero) => {
//     let numAleatorio = Math.round(Math.random() * 4) + 1;
//     const checa = () => numAleatorio === numero ? 'Parabéns você ganhou' : 'Tente novamente';
//     console.log(`${numero} e ${numAleatorio}`);
// return checa;
// }

// const resultado = (func) => func();
//----
// console.log(resultado(numAleatorio(2)));

// const numberChecker = (myNumber, number) => myNumber === number;
// const lotteryResult = (myNumber, callback) => {
//   const number = Math.floor((Math.random() * 5) + 1);
//   return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
// };
// console.log(lotteryResult(2, numberChecker));

//---------------------------------------
//exercicio Corretor automatico de exame

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const check = (rightAnswer, studentAnswer) => {
  let resultado = 0;
  for (let i = 0; i < rightAnswer.length; i += 1) {
    if (studentAnswer[i] !== rightAnswer[i] && studentAnswer[i] === 'N.A') {
      resultado += 0;
    } else if (studentAnswer[i] !== rightAnswer[i] && studentAnswer[i] !== 'N.A') {
      resultado -= 0.5;
    } else if (studentAnswer[i] === rightAnswer[i]) {
      resultado += 1;
    }
  }
  return `Resultado final: ${resultado} pontos.`;
}
const resultado = (rightAnswer, studentAnswer, callback) => callback(rightAnswer, studentAnswer);

console.log(resultado(RIGHT_ANSWERS, STUDENT_ANSWERS, check));