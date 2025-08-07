function sqrMetersGreen (sqrMeters){
    let sqrMeterPrice = 7.61;
    let discountRate = 0.18;
    let totalPrice = sqrMeters * sqrMeterPrice;
    let discount = totalPrice * discountRate;
    let finalPrice = totalPrice - discount

    console.log("The final price is: " + finalPrice + " lv.");
    console.log("The discount is: " + discount + " lv.");
}

sqrMetersGreen(150);