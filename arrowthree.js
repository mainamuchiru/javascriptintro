const greet2 = (fname , lname) => {
if (fname && lname){
    return `Hello there, ${fname} ${lname}`;
} else {
    throw new Error ('Both names required for greeting');
}

}

console.log(greet2('Jane', 'Doe'));