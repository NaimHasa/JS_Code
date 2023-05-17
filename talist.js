function maxInArray (numbers){
   let largest = numbers[];
   for(let i = 0; i< numbers.length; i++){
   
   let index = i;
     let element = numbers[index];
      if(largest> element){
         element = largest;
      }
      console.log(element);

   }
   return largest;
   
}


const heights = [195, 190, 120, 450, 137];
const tallest = maxInArray(heights);
console.log(tallest);

