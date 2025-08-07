function calculatorDeposit(deposit, timeInMonths, interest){
    let sumInterest = deposit * (interest/100);
    let interestForMonth = sumInterest/12;
    let finalSum = deposit + timeInMonths * interestForMonth;

    console.log (finalSum);
}

calculatorDeposit (2350, 6, 7);