let frist = 5;
let second = 9;
console.log(frist, second);


//this is wrong approach
//let frist = 5;
//let second = 9;


// Approch: 01 

const temp = frist;

frist = second;
second = temp;
console.log(frist, second);

//approch: 02 Destructureing 

[frist, second] = [second, frist];
console.log(frist, second);

