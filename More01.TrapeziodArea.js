function trapeziodArea (sideOne, sideTwo, high){
    let area = (sideOne+sideTwo) * high/2;

    console.log(area.toFixed(2));
}

trapeziodArea(8, 13, 7);