// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = 0;

// for (let index = 0; index < numbers.length; index++) {
//     soma += numbers[index];
// }

// console.log(soma);

// ----------------------------------------------------------------
// Exercicio 3 e 4

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = 0;
// let media;

// for (let index = 0; index < numbers.length; index++) {
//     soma += numbers[index];
// }
// media = soma / numbers.length;

// if (media > 20){
//     console.log('Valor maior que 20');
// } else {
//     console.log('Valor menor ou igual a 20');
// }

// ----------------------------------------------------------------
// Exercicio 5

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let maiorValor = 0;

// for (let index = 0; index < numbers.length; index++){
//     if (maiorValor < numbers[index]){
//         maiorValor = numbers[index]
//     }    
// }
// console.log(maiorValor);

// ----------------------------------------------------------------
//Exercicio 6

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let impar = 0;

// for (let index = 0; index < numbers.length; index++){
//     if (numbers[index] % 2 !== 0){
//         impar += 1;
//     }    
// }
// console.log(impar);

// ----------------------------------------------------------------
//Exercicio 7

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let menorValor = numbers[0];

// for (let index = 1; index < numbers.length; index++){
//     if (menorValor > numbers[index]){
//         menorValor = numbers[index]
//     }    
// }
// console.log(menorValor);

// ----------------------------------------------------------------
//Exercicio 8 e 9

// for (let index = 1; index <= 25; index++) {
//     console.log(index / 2);
// }

// ----------------------------------------------------------------
//Bônus 1

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (index = 1; index < numbers.length; index += 1){
//     for (index2 = 0; index2 < index; index2 += 1){
//         if (numbers[index] < numbers[index2]){
//             let posicao = numbers[index];
//             numbers[index] = numbers[index2];
//             numbers[index2] = posicao;
//         }
//     }
// }
// console.log(numbers);

// ----------------------------------------------------------------
// //Bônus 2

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (index = 1; index < numbers.length; index += 1){
//     for (index2 = 0; index2 < index; index2 += 1){
//         if (numbers[index] > numbers[index2]){
//             let posicao = numbers[index];
//             numbers[index] = numbers[index2];
//             numbers[index2] = posicao;
//         }
//     }
// }
// console.log(numbers);

// ----------------------------------------------------------------
//Bônus 3

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let array = [];

for (let index = 0; index < numbers.length; index += 1){
    if (index === numbers.length - 1){
        array.push(numbers[index] * 2);
    } else {
        array.push(numbers[index] * numbers[index + 1]);
    }
}
console.log(array);