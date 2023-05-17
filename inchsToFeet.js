const myInches = 36;
// const myFeet = myInches / 12;
// console.log("Total inches:",myFeet);

// function milesToKilomiter (milis){
//     const kilomiter = milis *1.609;
//     console.log(kilomiter);
// }
// milesToKilomiter(255);


// function isEven (number){
//     var remainder = number % 2;
//     // console.log(remainder);
//     if(remainder === 0){
//         // console.log('This Number is even');
//         return true;
//     }
//     else{
//         // console.log('This number is odd');
//         return false;
// //     }
// }
//  var myNumberIsEven = isEven(458);
//  console.log(myNumberIsEven);
//  var myNumberIsEven = isEven(455);
//  console.log(myNumberIsEven);


//  function isLeapYear (year){
//     const remainder = year % 4;
//     if(remainder === 0){
// //         console.log('This Year is Leap Year:', year);
// //     }
// //     else{
// //         console.log('This Year is Not a LeapYear:', year);

// //     }
// //  }
// //  isLeapYear(2027);




function isLeapYear (year){
    const remainder = year % 4;
    if(remainder === 0){
        console.log('This Year is leap year: ', year)
    }
    else{
        console.log('Your Year is Not a leap year: ', year)

    }

}
isLeapYear(1196);



function isLeapYear (year){
    const remainder = year % 4;
    if(remainder === 0){
        console.log('This Year is Leap Year:', year)
    }
    else{
        console.log('This is Not a leap year' , year)
    }
}
isLeapYear(2024);





















