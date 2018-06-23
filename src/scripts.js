const names = ['Émerson', 'José', 'Silva', 'Silva'];

const countNames = JSON.stringify(names.reduce((accumulator, current) => {
    if (current in accumulator) accumulator[current]++;
    else accumulator[current] = 1;
    return accumulator;
}, {}));

const friends = [{
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21,
}, {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 26,
}, {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18,
}];

const allbooks = JSON.stringify(friends.reduce((accumulator, current) => {
    return [...accumulator, ...current.books];
}, ['Alphabet']));

module.exports = [
    countNames,
    allbooks,
];
