let num1 = 1500; // number
let num2 = 2.5; // number

/*console.log(num1.toString() + num2);
//num1 = num1.toString();
console.log(num1.toString(2));*/

let num3 = 10.435562455;
console.log(num3.toFixed(2));


 console.log(Number.isInteger(num1));
 console.log(Number.isInteger(num2));

 let letra = ' ';
 console.log(Number.isNaN(letra));
 
 let num4 = 0.7; //number
 let num5 = 0.1; //number

 console.log(num4 + num5);
 console.log(((num4 * 100) + (num5 * 100) )/ 100); // the hard way???
 num4 += num5; // num1 = num1 + num2 = 0.8
 num4 += num5; // 0.9
 num4 += num5; // 1.00
 
 num4 = parseFloat(num4.toFixed(2)); //the easy way
 console.log(num4);