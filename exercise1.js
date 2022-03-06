// Exercise 1
let a
for (a=0; a<=10; a++){
console.log(a)
}
console.log('\n')

//Exercise 2

let b
for (b=2; b <= 100; b=b+2){
    console.log(b)
}
console.log('\n')

//Exercise 4
let result = '\n';
for (let i = 1; i < 11; i++) {
    for (let j = 1; j < 11; j++) {
        result += (i*j) + ' ';
    }
    result += '\n'
}
console.log(result)

//Exercise 3
let result1 = ' '
for (let c = 1; c < 11; c++) {
    let e = 7; {
        result1 += (c*e) + ' ';
    }
   
}
console.log(result1)

//Exercise 5

let n =10
let res = (n * (n+1)/2) // formula lui Gauss
console.log(res)

//Exercise 7

sum = 0;
for ( let e = 11; e <= 30; e += 2) {
   sum += e;
}
console.log(sum)
console.log('\n')

//Exercise 8
const array = [1, 2, 3, 4];
 var sum = 0;
 for (let i = 0; i < array.length; i++) {
 sum += array[i];
  }
 console.log(sum)
 
 //Exercise 9
 const avg = arr => {
    const sum = arr.reduce((acc, cur) => acc + cur);
    const average = sum/arr.length;
    return average;
  }
  
  console.log(avg([1, 2, 3, 4, 5, 6]));

  //Exercise 10
  var array1 = [3, -1, 0, 7, -71, 9, 10, -19];

const getpositiveNumbers = (array1) => array1.filter(value => value > 0);

var positives = getpositiveNumbers(array1);

console.log(positives);

//Exercise 11
const array2 = [1, 3, 5];

console.log(Math.max(...array2));

//Exercise 12

function isPrime(num){
    let isPrime = '';
    for(let i = 2; i <= Math.sqrt(num); i++){
      if(num % i === 0){
        isPrime = false;
      } else {
        isPrime = true;
      }
    }
    return isPrime;
  
  }
  
  console.log(isPrime(11))

  //Exercise 13

  let value = 1451,
    sum1 = 0;

while (value) {
    sum1 += value % 10;
    value = Math.floor(value / 10);
}

console.log(sum1);

//Exercise 14 
let first100primes = [], n1 = 2;
do if (isPrime(n1++)) first100primes.push(n1 - 1);
while (first100primes.length < 100);

function isPrime(n1) {
    let sqrtn = Math.sqrt(n1);

    for (let i = 2; i <= sqrtn; i++)
        if (n1 % i === 0) return false;
    return true;
}
console.log(first100primes)

//Exercise 15
let arr = [1, 2, 4, 5];
rotateLeft(arr);
function rotateLeft(arr){
    let first = arr.shift();
    arr.push(first);
    return arr; 

}
console.log(arr)

//Exercise 16

const et = [1,2,3,4,5]
et.reverse()
console.log(et)

//Exercise 17

let car = ['red', 'v8']
let car2 = ['green', 'v6']
let cars1 = [].concat(car, car2)
// let cars = [...car,...car2]
console.log(cars1);

//Exercise 18

let a2=[ 1, 2, 3, 4, 5 ];
let b2=[3, 5, 1, 0];
let n2 = a2.length;
let m2 = b2.length;
 
    function findMissing(a2,b2,n2,m2){
        for (let i = 0; i < n2; i++) {
          let j;
              for (j = 0; j < m2; j++)
                if (a2[i] == b2[j])
                    break;
   
            if (j == m2)
                console.log(a2[i] + " ");
        }
    }
    findMissing(a2,b2,n2,m2);
    

    //Exercise 19

  let myArray = ['a',1,'a',2,'1',5, 10,'5'];
  let unique = [...new Set(myArray)];

console.log(unique); 


// Exercise 20

let string = "Hello World !"
console.log(string.split(" ").length);
// in forma de functie: 
function fn1(st) {
  return st.split(" ").length;}
  console.log(fn1("Hello Word"))
