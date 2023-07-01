// prime number or not

let number = parseInt(prompt("Enter a number:"));
let prime = false;
for (let i = 2; i < number; i++) {
    if (number % i == 0) {
        prime = true;
    }
}
if (prime) {
    console.log("It is a Not Prime Number")
} else {
    console.log("It is a Prime Number")
}