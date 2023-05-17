const soppingCart = [
    {name: 'show', price: 150},
    {name: 'shirt', price: 350},
    {name: 'pant', price: 450},
    {name: 'belt', price: 750},
];

function totalCost (products){
    let sum = 0;
    for(let i = 0; i < products.length; i++){
       const product = products[i];
        //  console.log(product);
        sum = sum + product.price;
    }
    return sum;
}

const expense = totalCost (soppingCart);
console.log('Total Price :',expense);