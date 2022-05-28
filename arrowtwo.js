const greet1 = function(fname,lname){
    return `Hello there, ${fname} ${lname}`;
}

console.log(greet1('john', 'Doe'));

const greet2 = (fname,lname) => `Hello there, ${fname} ${lname}`;
console.log(greet2('Jane','Doe'));