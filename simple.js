
// let sum = 0;
// for(let i = 0 ; i <= 5; i++){
// sum = sum + i;
// }
// console.log(sum);

function factorial (i){
    if(i == 1){
        return 1;
    }
    return i * factorial(i-1);
}

const result = factorial(5);
console.log(result);