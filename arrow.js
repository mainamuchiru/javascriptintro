const greet1 = function(fname) {
    return `Hello there, ${fname}`;
}

console.log(greet1('john'));

const greet2 = fname => `Hello there, ${fname}`;
console.log(greet2('jane'));