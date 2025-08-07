// •	Първи ред – Цена за килограм зеленчуци – реално число[0.00… 1000.00]
// •	Втори ред – Цена за килограм плодове – реално число[0.00… 1000.00]
// •	Трети ред – Общо килограми на зеленчуците – цяло число[0… 1000]
// •	Четвърти ред – Общо килограми на плодовете – цяло число[0… 1000]

// Зеленчуците струват – 0.194лв. * 10кг. = 1.94лв.
// Плодовете струват – 19.4лв. * 10кг.  = 194лв.
// Общо – 195.94лв. = 101евро


function vegetableMarket (vegetablePricePerKg, fruitPricePerKg, vegetableTotalKg, fruitTotalKg){
    let vegetablePrice = vegetablePricePerKg * vegetableTotalKg;
    let fruitPrice = fruitPricePerKg * fruitTotalKg;
    let totalPrice = vegetablePrice + fruitPrice;
    let finalEuroPrice = totalPrice / 1.94;

    console.log(finalEuroPrice.toFixed(2));
}

vegetableMarket (1.5, 2.5, 10, 10);