const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

const formatedBookNames = (array) => array.map((element) => `${element.name} - ${element.genre} - ${element.author.name}`);

// formatedBookNames(books);
// console.log(formatedBookNames(books));

const nameAndAge = (array) => array.map((element) => ({age: element.releaseYear - element.author.birthYear, author: element.author.name})).sort((a, b) => a.age - b.age);

// nameAndAge(books);
// console.log(nameAndAge(books));

const fantasyOrScienceFiction = (array) => array.filter((element) => (element.genre === 'Ficção Científica' || element.genre === 'Fantasia'));

// fantasyOrScienceFiction(books);
// console.log(fantasyOrScienceFiction(books))

const oldBooksOrdered = (array) => array.filter((element) => (new Date().getFullYear() - element.releaseYear) >= 60).sort((a, b) => a.releaseYear - b.releaseYear);

// console.log(oldBooksOrdered(books));

const fantasyOrScienceFictionAuthors = (array) => array.filter((element) => (element.genre === 'Ficção Científica' || element.genre === 'Fantasia')).map((element) => `${element.author.name}`).sort()

// console.log(fantasyOrScienceFictionAuthors(books));

const oldBooks = (array) => array.filter((element) => (new Date().getFullYear() - element.releaseYear) >= 60).map((element) => element.name)

// console.log(oldBooks(books));

const authorWith3DotsOnName = (element) => element.find((element) => (element.author.name[1] === '.' && element.author.name[4] === '.' && element.author.name[7] === '.')).name;

console.log(authorWith3DotsOnName(books));


module.exports = {formatedBookNames, nameAndAge};