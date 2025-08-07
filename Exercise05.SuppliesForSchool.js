function schoolSupplies(pens, markers, liquid, discount){
    let penSum = pens * 5.80;
    let markersSum = markers * 7.20;
    let liquidSum = liquid * 1.20;
    
    let totalSum = penSum + markersSum + liquidSum;

    let discountPercentage = discount/100;
    let discountedSum = totalSum * discountPercentage;

    totalSum = totalSum - discountedSum;

    console.log(totalSum);
}

schoolSupplies(4, 2, 5, 13);