// const testingScope = escopo => {

//   if (escopo) {
//     let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = `${ifScope}. ótimo, fui utilizada no escopo !`;
//     console.log(ifScope);
//   } else {
//     const elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
//     console.log(elseScope);
//   }

// }

//   testingScope(false);

//------------------------------------------------

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// const sortOddsAndEvens = array => { 
//   for (let index = 1; index < array.length; index += 1) {
//     for (let index2 = 0; index2 < index; index2 += 1) {
//       if (array[index] < array[index2]) {
//         let position = array[index];
//         array[index] = array[index2];
//         array[index2] = position;
//       }
//     }
//   }
//   return array;
// };

// console.log(`Os números ${sortOddsAndEvens(oddsAndEvens)} se encontram ordenados de forma crescente!`);

//------------------------------------------------

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// const sortArrayBonus = (array) => {
//   const sortOddsAndEvens = array.sort((a, b) => a - b);
//   return sortOddsAndEvens;
// };

// const sortedArrayBonus = sortArrayBonus(oddsAndEvens);
// console.log(`Os números ${sortedArrayBonus} se encontram ordenados de forma crescente!`);


//Exercicio parte 2 ------------------------------

const factorial = num => {
  let result = 1;
  for (let index = 2; index <= num; index += 1) {
    result *= index;
  }
  return result;
}

console.log(`Esse é o fatorial ${factorial(4)}`);
