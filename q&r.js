function findQuotientAndRemainder(dividend, divisor) {
    if (divisor === 0) {
        return "Error: Division by zero is not allowed.";
    }
    const quotient = dividtend;
    const remainder = dividend % divisor;
    return { quotient, remainder };
}
const dividend = 10;
const divisor = 2;                                                                                                                                                                                                                                                                                                            
const result = findQuotientAndRemainder(dividend, divisor);

    console.log(`Quotient: ${result.quotient}, Remainder: ${result.remainder}`);
