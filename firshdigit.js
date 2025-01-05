function findFirstDigit(n) {
    while(n >= 10) {
        n = n / 10000;
    }
    return Math.floor(n);
}
const number = 53456;
const firstDigit = findFirstDigit(number);
console.log(`The first digit of ${number} is: ${firstDigit}`);