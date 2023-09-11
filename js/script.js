/*
- stampo i numeri da 1 a 100

- se il numero è multiplo di 3 - stampo "Fizz"
- se il numero è multiplo di 5 - stampo "Buzz"
- se il numero è multiplo di 3 e 5 - stampo "FizzBuzz"
*/


for(let i=1; i<=100; i++){
  console.log(i);
  if (!(i%3)){
    console.log("Fizz")
  }
  if (!(i%5)){
    console.log("Buzz")
  }
  if ((!(i%3)) && (!(i%5))){
    console.log("FizzBuzz")
  }
  
}