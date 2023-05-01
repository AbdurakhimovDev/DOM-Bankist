
const jessica2 = {
    firstName:'Jessica',
    lastName:'Williams',
    age:27,
};

const jessicaCopy = Object.assign({},jessica2);

jessicaCopy.lastName = 'Davis';
console.log('Before marriage:',jessica2);
console.log('After marriage:',jessicaCopy);