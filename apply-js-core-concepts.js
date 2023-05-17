var soppingCart = {
    mokter: 50,
    rakib: 20,
    tamim: 35,
    bakir: 40
}

var keys = Object.keys(soppingCart);
// console.log(keys);

const values = Object.values(soppingCart);
// console.log(values);

for(var i = 0; i<keys.length; i ++){
    var shopingName = keys[i];
    var shopingValue = soppingCart[shopingName];
    console.log(shopingName, shopingValue);
}