//---------------------------------------------------------------
//Execicio 1 e 2 e 3

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };
//   info.recorrente = 'Sim';

//   for(let index in info){
//     console.log(index);
//   }
//   console.log(info);
//   console.log('Bem-vinda ' + info.personagem);

//---------------------------------------------------------------
//Execicio 4

// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };
// info.recorrente = 'Sim';

// for(let index in info){
//   console.log(info[index]);
// }

//---------------------------------------------------------------
//Execicio 5

// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   recorrente: 'Sim'
// };
// let info2 = {
//   personagem: 'Tio Patinhas',
//   origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
//   nota: 'O último MacPatinhas',
//   recorrente: 'Sim'
// };
// for (let index in info, info2){
//   console.log(info[index] + ' e ' + info2[index])
// }

//---------------------------------------------------------------
//Execicio 6

// let leitor = {
//   nome: 'Julia',
//   sobrenome: 'Pessoa',
//   idade: 21,
//   livrosFavoritos: [
//     {
//       titulo: 'O Pior Dia de Todos',
//       autor: 'Daniela Kopsch',
//       editora: 'Tordesilhas',
//     },
//   ],
// };

// console.log('"O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo + '"');

//---------------------------------------------------------------
//Execicio 7 e 8

// let leitor = {
//   nome: 'Julia',
//   sobrenome: 'Pessoa',
//   idade: 21,
//   livrosFavoritos: [
//     {
//       titulo: 'O Pior Dia de Todos',
//       autor: 'Daniela Kopsch',
//       editora: 'Tordesilhas',
//     },
//   ],
// };

// leitor.livrosFavoritos.push({
//   titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//   autor: 'JK Rowling',
//   editora: 'Rocco',
// });

// console.log(leitor.livrosFavoritos);
// console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.');

let a = "Serei a melhor pessoa dev";
let b = "Esse é meu jeito dev de ser!";
let num = 2;
let strings = [a, b];
console.log((typeof strings.length) == (typeof num));
