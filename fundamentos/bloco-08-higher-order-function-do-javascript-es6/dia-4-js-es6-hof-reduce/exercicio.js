// const arrays = [
//   ['1', '2', '3'],
//   [true],
//   [4, 5, 6],
// ];

// const flatten = () => arrays.reduce((acc, cur) => acc.concat(cur), []);
// console.log(flatten());

//---------

// const books = [
//   {
//     id: 1,
//     name: 'As Crônicas de Gelo e Fogo',
//     genre: 'Fantasia',
//     author: {
//       name: 'George R. R. Martin',
//       birthYear: 1948,
//     },
//     releaseYear: 1991,
//   },
//   {
//     id: 2,
//     name: 'O Senhor dos Anéis',
//     genre: 'Fantasia',
//     author: {
//       name: 'J. R. R. Tolkien',
//       birthYear: 1892,
//     },
//     releaseYear: 1954,
//   },
//   {
//     id: 3,
//     name: 'Fundação',
//     genre: 'Ficção Científica',
//     author: {
//       name: 'Isaac Asimov',
//       birthYear: 1920,
//     },
//     releaseYear: 1951,
//   },
//   {
//     id: 4,
//     name: 'Duna',
//     genre: 'Ficção Científica',
//     author: {
//       name: 'Frank Herbert',
//       birthYear: 1920,
//     },
//     releaseYear: 1965,
//   },
//   {
//     id: 5,
//     name: 'A Coisa',
//     genre: 'Terror',
//     author: {
//       name: 'Stephen King',
//       birthYear: 1947,
//     },
//     releaseYear: 1986,
//   },
//   {
//     id: 6,
//     name: 'O Chamado de Cthulhu',
//     genre: 'Terror',
//     author: {
//       name: 'H. P. Lovecraft',
//       birthYear: 1890,
//     },
//     releaseYear: 1928,
//   },
// ];

// const reduceNames = () => books.reduce((acc, cur) => `${acc} ${cur.author.name}.`, '');
// console.log(reduceNames());

// const averageAge = () => books.reduce((acc, cur) => 
//   (acc + (cur.releaseYear - cur.author.birthYear)), 0) / books.length;
// console.log(averageAge());

// const longestNamedBook = () => books.reduce((acc, cur) => 
//   (acc.name.length > cur.name.length) ? acc : acc = cur);
// console.log(longestNamedBook());

// const names = [
//   'Aanemarie', 'Adervandes', 'Akifusa',
//   'Abegildo', 'Adicellia', 'Aladonata',
//   'Abeladerco', 'Adieidy', 'Alarucha',
// ];

// const containsA = () => {
//   let result = 0;
//   names.forEach((element) => {
//     result += element.split('').reduce((acc, cur) => (cur === 'a' || cur === 'A') ? acc + 1 : acc, 0)
//   })
//   return result;
// };
// console.log(containsA());

//------------

// const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
// const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

// const studentAverage = () => students.map((element, index) => ({
//   name: element, 
//   avarage: grades[index].reduce((acc, cur) => acc + cur, 0)}));
// studentAverage()
// console.log(studentAverage())
