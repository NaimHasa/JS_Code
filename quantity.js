const soppingCart = [
    {name: 'show', price: 150, quntaity: 4},
    {name: 'shirt', price: 350, quntaity: 3},
    {name: 'pant', price: 450, quntaity: 5},
    {name: 'belt', price: 750, quntaity: 2},
];

function totalCost (products){
    let sum = 0;
    for(let i = 0; i < products.length; i++){
       const product = products[i];
        //  console.log(product);
        const TotalPrice = product.price * product.quntaity;
        sum = sum + TotalPrice;
    }
    return sum;
}

const expense = totalCost (soppingCart);
console.log('Total Price :',expense);