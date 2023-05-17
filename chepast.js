// const phones = [
//     {name: 'Sumsung', price: 35000, ram: '12gb', camera: '12px', color: 'Black'},
//     {name: 'i phone', price: 40000, ram: '12gb', camera: '12px', color: 'Black'},
//     {name: 'Nokia', price: 5000, ram: '12gb', camera: '12px', color: 'green'},
//     {name: 'xaiomi', price: 18000, ram: '12gb', camera: '12px', color: 'Black'},
//     {name: 'realme', price: 15000, ram: '12gb', camera: '12px', color: 'red'},
//     {name: 'symphone', price: 4000, ram: '12gb', camera: '12px', color: 'selver'}
// ];

// function lowPricePhone (phones){
//    const  chipestPrice = phones[0];
//     for(let i = 0; i < phones.length; i ++){
//         let phone = phones[i];
//         // console.log(phone);
//         if(phone.price< chipestPrice.price){
//            chipestPrice = phone ;
//         }
//         // console.log(phone);
//     }
//     return chipestPrice;

// }
// const mySelection = lowPricePhone(phones);
// console.log(mySelection);

const phones = [
    {name: 'Sumsung', price: 35000, ram: '12gb', camera: '12px', color: 'Black'},
    {name: 'i phone', price: 40000, ram: '12gb', camera: '12px', color: 'Black'},
    {name: 'Nokia', price: 5000, ram: '12gb', camera: '12px', color: 'green'},
    {name: 'xaiomi', price: 18000, ram: '12gb', camera: '12px', color: 'Black'},
    {name: 'realme', price: 15000, ram: '12gb', camera: '12px', color: 'red'},
    {name: 'symphone', price: 4000, ram: '12gb', camera: '12px', color: 'selver'}
];

function chipestPhone (phones){
    let cheaapest = phones[0];
for ( let i = 0; i < phones.length; i++){
    const phoneItem = phones[i];
    if(phoneItem.price <cheaapest.price){
        cheaapest = phoneItem;
}


}
return cheaapest;

}
const mySelection =  chipestPhone(phones);
console.log(mySelection);