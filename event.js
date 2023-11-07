  const arr=[1,2,3,4,5,6,7,8,9,10,11];

  const odd = arr.filter(amir => 
    {
     return amir%2 !== 0;

  });
  console.log(odd);




  var even= [100,22,3,44,55,66,74,673,76];

    var result = even.filter(number =>
    {
            return number % 2 === 0;
   });
    console.log(result);


//    is given arrays values 1 2 3 4 5 6 7 8 9 10 11 find you odd numbers
   

//   var odd = [1,2,3,4,5,6,7,8,9,10,11,12,13];

//   var number= odd.filter (number => {

//       return number % 2 !== 0;

//   });
//   console.log(number);
const numbers = [122, 345, 678, 996, 433, 78865];
// index define kore 0 mane 122 1 mane 345 amra jani arry index 0123456..
let largest = numbers[0];  

//   console.log(largest);
//Assume the first element is the largest initially

for (let i = 1; i < numbers.length; i++) {
     console.log(i);
    //   console.log(numbers[i]);
 if (numbers[i] > largest) {
    largest = numbers[i];
 }
 }

console.log("The largest number is:", largest);