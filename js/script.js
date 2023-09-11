/*
- stampo i numeri da 1 a 100

- se il numero è multiplo di 3 - stampo "Fizz"
- se il numero è multiplo di 5 - stampo "Buzz"
- se il numero è multiplo di 3 e 5 - stampo "FizzBuzz"
*/
const containerBox = document.querySelector(".container-box");
let text;

for(let i=1; i<=100; i++){

  const box = document.createElement("div");
  box.classList.add("box");

  // testo se multiplo di 3 e 5
  if ((i%3 == 0) && (i%5 == 0)){
    text = "FizzBuzz";
    box.classList.add("bg-fizzbuzz");
  }else
  // testo se multiplo di 3
  if (i%3 == 0){
    text = "Fizz";
    box.classList.add("bg-fizz");
  }else
  // testo se multiplo di 5
  if (i%5 == 0){
    text = "Buzz";
    box.classList.add("bg-buzz");
  }else
  {
    // testo di default
    text = i;
  }

  box.append(text);
  containerBox.append(box);
}

