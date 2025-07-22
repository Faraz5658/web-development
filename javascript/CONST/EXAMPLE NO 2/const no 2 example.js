const person = {
    name: 'Faraz',
    age: 21
};

console.log('person.name: ',person.name);    // Output: Faraz

// Modifying object properties is allowed
person.name = 'Bangash';   
console.log('person.name: ', person.name);// Output: Bangash

// Attempting to reassign the variable will throw an error
person = {};    // Throws TypeError: Assignment to constant variable.