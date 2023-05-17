// const names = ['abul', 'babul', 'cabul', 
// 'dabul', 'ebul', 'babul','gabul', 'dabul', 'abul'];
// function removeDuplicate (names){
//     const unique = [];
//     for(let i = 0; i<names.length; i++){
//         const element = names[i];
//        if(unique.includes(element) === false){
//           unique.push(element);
//        }
//     }
//     return unique;
// }

// const name = removeDuplicate(names);
// console.log(name);


const names = [11, 54, 85, 48, 85, 85, 48, 12, 15, 75,  98, 99, 55];

function removeDuplicate (names){
    const uniqueName = [];
    for(let i = 0; i<names.length; i ++){
        const element = names [i];
       if(uniqueName.includes(element) === false){

        uniqueName.push(element);
       }
    }
    return uniqueName;
}
const name = removeDuplicate(names);
console.log(name);
