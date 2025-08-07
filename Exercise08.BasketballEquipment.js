function basketballEquimpment(yearlyPriceTrainings){
    let sneakers = yearlyPriceTrainings * 0.60;
    let outfit = sneakers * 0.80;
    let ball = outfit * 0.25;
    let accessories = ball * 0.20;

    let totalSum = yearlyPriceTrainings + sneakers + outfit + ball + accessories;

    console.log(totalSum);
}

basketballEquimpment(550);