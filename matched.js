//Objective lot of phone i will find 'multiple phone'

const products = [
    {id: 1, name:'sumsung phone', price: 15000},
    {id: 2, name:'iphone', price: 75000},
    {id: 3, name:'mac book', price: 35000},
    {id: 4, name:'lanavo', price: 15000},
    {id: 5, name:'nokia phone', price: 25000},
    {id: 6, name:'hp laptop', price: 15000},
    {id: 7, name:'realme Phone', price: 5000},
]

function matchedProducts(products, search){
    const mathced = [];
    for (const product of products){
      if(product.name.toLowerCase().includes(search.toLowerCase())){

          mathced.push(product);
      }
    }
    return mathced;
}
const result = matchedProducts(products, 'laptop');
console.log(result);


// const products = [
//     {id: 1, name:'sumsung phone', price: 15000},
//     {id: 2, name:'iphone', price: 75000},
//     {id: 3, name:'mac book', price: 35000},
//     {id: 4, name:'lanavo', price: 15000},
//     {id: 5, name:'nokia phone', price: 25000},
//     {id: 6, name:'hp laptop', price: 15000},
//     {id: 7, name:'realme Phone', price: 5000},
// ]


