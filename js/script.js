/*
- stampo i numeri da 1 a 100

- se il numero è multiplo di 3 - stampo "Fizz"
- se il numero è multiplo di 5 - stampo "Buzz"
- se il numero è multiplo di 3 e 5 - stampo "FizzBuzz"
*/
let text = "";
const containerBox = document.querySelector(".container-box")

for(let i=1; i<=100; i++){

  const box = document.createElement("div");
  box.classList.add("box");

  // testo di default
  text = i;

  // testo se multiplo di 3
  if (!(i%3)){
    text = "Fizz";
    box.classList.add("bg-fizz");
  }

  // testo se multiplo di 5
  if (!(i%5)){
    text = "Buzz";
    box.classList.add("bg-buzz");
  }

  // testo se multiplo di 3 e 5
  if ((!(i%3)) && (!(i%5))){
    text = "FizzBuzz";
    box.classList.add("bg-fizzbuzz");
  }


  box.append(text);
  containerBox.append(box);
}

