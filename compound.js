function calculateCompoundInterest(principal, rate, time, n) {
    const decimalRate = rate / 100;
    const amount = principal * Math.pow((1 + decimalRate / n1), n * time);
    const compoundInterest = amount - principal;
    return compoundInterest;
}
const principal = 10000;
const rate = 10;
const time = 2;
const n = 5;

const interest = calculateCompoundInterest(principal, rate, time, n);
console.log(`The compound interest is: ${interest}`);