function tricketPrice (tricketQuantity){
    const first100Rate = 100;
    const second100Rate = 90;
    const restTricketPrice = 70;
    if(tricketQuantity <= 100){
           const price = tricketQuantity * first100Rate;
           return price;
    }
}

const price = tricketPrice(5);
console.log(price);